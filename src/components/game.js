import React from 'react';
import axios from 'axios';

var config = {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`}
}

const directions = ["n", "s", "e", "w"];
const opposites = {"n": "s", "s": "n", "e": "w", "w": "e"};
const initialDft = async () => {
    var prevDir = null
    var prevRoom = null
    var cooldown = null
    var startRoom = null
    // get current room info
    setTimeout(() => {
        axios.get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, config)
            .then(res => {
                console.log(res)
                startRoom = res.data
                cooldown = res.data.cooldown
                console.log('DFT INIT SUCCESS')
                console.log(startRoom, cooldown, prevDir, prevRoom)
                return recurser(startRoom, prevDir, prevRoom, cooldown)
            })
            .catch(err => {
                console.log('INIT REQUEST ERR', err)
            })
    }, 16000)
    
    // recursive helper function below
    async function recurser(curRoom, prevD, prevR, cooldown){
        var inMap = null
        let exits = curRoom.exits
        let coordinates = curRoom.coordinates.replace("(", '').replace(")", '').replace(",", ' ')
        let coordArr = coordinates.split(' ')
        coordArr.forEach((item, index) => coordArr[index] = parseInt(item))
        //check your map to see if room exists
        let room = null
        await axios.get(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${curRoom.room_id}`)
            .then(res => {
                console.log('DFT GET BY ID',res.data)
                room = res.data
                inMap = true
            })
            .catch(err => {
                console.log('err in getting cur room', err)
                inMap = false
            })
        if (inMap === false){
            room = {
                room_id: curRoom.room_id,
                name: curRoom.title,
                x_coord: coordArr[0],
                y_coord: coordArr[1]
            }
            exits.forEach(item => room[item] = -1)

            if (prevD !== null){
               room[opposites[prevD]] = prevR.room_id
            }
            if (curRoom.title === "Shop"){
                room["shop"] = 1
            } else if (curRoom.title === "Shrine"){
                room["shrine"] = 1
            } else if (curRoom.title === "Name Changer"){
                room["name_changer"] = 1
            }

            console.log("CHECKING ROOM DATA", room)
            await axios.post(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/`, room)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            console.log('ROOM', room)
                            console.log('ADD ROOM TO DB ERR', err)
                        })  
        } else if (prevD !== null){
            room[opposites[prevD]] = prevR.room_id
            await axios.put(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${curRoom.room_id}`, room)
                    .then(res => {
                        console.log('DIRECTION UPDATE SUCCESS', res)
                    })
                    .catch(err => {
                        console.log('FAILED TO UPDATE DIRECTIONS', err)
                    })
        }
        if (curRoom.items > 0){
            
            setTimeout(() => {
                axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', {name: curRoom.items[0]}, config)
                    .then(res => {
                        console.log('FROM TAKE', res)
                    })
                    .catch(err => {
                        console.log('TAKE ERR', err)
                    })
            },1000 * cooldown)
            
        }
        let unexplored = []
        
        exits.forEach(item => {
            if (room[item] === -1){
                unexplored.push(item)
            }
        })
        console.log('UNEXPLORED', unexplored)
        if(unexplored.length === 0){
            // setTimeout(() => {
            return initialBfs()
            // }, cooldown * 1000)
        }
        
        
        let nextMove = unexplored[Math.floor(Math.random() * unexplored.length)]
        if (unexplored.length === 1){
            nextMove = unexplored[0]
        }
        let newCooldown = null
        let newRoom = null
        setTimeout(() => {
            console.log('NEXT MOVE', nextMove)
            axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move', {direction: nextMove}, config)
                .then(res => {
                    console.log(res.data)
                    newCooldown = res.data.cooldown
                    newRoom = res.data
                    let changes = {}
                    changes[nextMove] = newRoom.room_id
                    console.log('TEST CHANGES', changes)
                    axios.put(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${curRoom.room_id}`, changes)
                        .then(res => {
                            console.log('DIRECTION UPDATE SUCCESS', res)
                        })
                        .catch(err => {
                            console.log('FAILED TO UPDATE DIRECTIONS', err)
                        })
                    console.log('MOVE SUCCESS', newCooldown, newRoom)
                    return recurser(newRoom, nextMove, curRoom, newCooldown)
                })
                .catch(err => {
                    console.log('FROM MOVE ERR', nextMove)
                    console.log('MOVING ERR', err)
                })
        }, 1000 * cooldown)
        
        
    }
    // console.log(startRoom, cooldown, prevDir, prevRoom)
    // return recurser(startRoom, prevDir, prevRoom, cooldown)
}

async function initialBfs(){

    await axios.get(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/`)
            .then(res => {
                console.log('TOTAL ROOMS DRAWN', res.data.length)
                if(res.data.length === 500){
                    console.log('INITIAL TRAVERSAL COMPLETE')
                    return 'Done'
                }
            })
            .catch(err => {
                console.log('GET ROOMS ERR', err)
            })
    let q = []
    let exits = null
    let curRoom = null
    let cooldown = null
    setTimeout(() => {
        axios.get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, config)
            .then(res => {
                console.log(res)
                curRoom = res.data
                cooldown = res.data.cooldown
                exits = res.data.exits
                exits.forEach(item => {
                    q.push([item])
                })
                return recurseHelper()
            })
            .catch(err => {
                console.log('INIT REQUEST ERR', err)
            })
    }, 15000)
    
    
    
    let visited = {}
    async function recurseHelper(){
        console.log('QUEUE', q)
        let path = q.shift()
        let room
        let tempRoom = curRoom.room_id
        console.log('PATH', path)
        
        let i = 0
        while (i < path.length){
            console.log('TEMP OUTSIDE GET BY ID', tempRoom)
            await axios.get(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${tempRoom}`)
                .then(async res => {
                    if (res.data[path[i]] !== null){
                        tempRoom = res.data[path[i]]
                        console.log('temprm', tempRoom)
                        
                        await axios.get(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${tempRoom}`)
                                .then(res => {
                                    room = res.data
                                    console.log('ROOM FROM NEST',room)
                                    i++
                                }).catch(err => {
                                    console.log('UPDATE RM ERR', err)
                                })
                        
                    } else {
                        i++
                    }
                      
                })
                .catch(err => {
                    console.log('SET TEMP_ROOM ERR', err)
                })
            
            console.log('NEWROOM', room)   
        }
           
       
        
        // return setTimeout(() => {
            
            console.log('ROOM', room)
            if (!visited[tempRoom]){
                visited[tempRoom] = tempRoom;
                console.log('VISITED', visited)
                let k = 0;
                while(k < directions.length){
                    if(room[directions[k]] !== null){
                        if(room[directions[k]] === -1){
                            console.log('###### BOYS WE FOUND IT######')
                            
                            // path.forEach(dir => {
                            //     setTimeout(() => {
                            //         axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move', {direction: dir}, config)
                            //             .then(res => {
                            //                 console.log('BFS MOVE SUCCESS')
                            //                 cooldown = res.data.cooldown
                                            
                            //             })
                            //             .catch(err => {
                            //                 console.log('BFS MOVE FAIL', err)
                            //             })
                            //     }, cooldown * 1000)
                            // })
                                
                            k = directions.length
                            console.log('PATH BEFORE MOVES', path)
                            return travelPath(path, cooldown)
                            // console.log('###### BOYS WE FOUND IT######')
                            // initialDft()
                            // return 
                        }
                        // setTimeout(() => {
                            let pathCopy = [...path]
                            pathCopy.push(directions[k])
                            console.log('COPY', pathCopy)
                            q.push(pathCopy)
                            k++
                        // }, 1000)
                        
                        // console.log('QUEUE', q)
                    } else {
                        k++
                    }
                    
                }
            }
            return recurseHelper()
        // }, 700)
        
        // setTimeout(() => {
        //     return recurseHelper()
        // }, 5000)
     
        
    };
    // return recurseHelper()
       
}

function travelPath(path, cooldown){
    let nextMove = path[0]
    console.log('TRAVERSEPATH',path[0])
    console.log('COOLDOWN', cooldown)
    cooldown = 16
    setTimeout(() => {
        axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move', {direction: nextMove}, config)
            .then(res => {
                console.log('BFS MOVE SUCCESS')
                cooldown = res.data.cooldown
                // if (res.data.items > 0){
                //     setTimeout(() => {
                //         axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', {name: res.data.items[0]}, config)
                //             .then(res => {
                //                 console.log('FROM TAKE', res)
                //             })
                //             .catch(err => {
                //                 console.log('TAKE ERR', err)
                //             })
                //     }, cooldown * 1000)
                // }
            })
            .catch(err => {
                console.log('BFS MOVE FAIL', err)
            })
    }, cooldown * 1000)
    path.shift()
    if(path.length > 0){
        setTimeout(() => {
            travelPath(path, cooldown)
        }, cooldown * 1000)
        
    } else  {
        return setTimeout(() => {
            return initialDft()
        }, 16000)
    }
    
}

const Game = () => {

    return (
        <button onClick={() => initialDft()}>Build Map</button>
    )
}

export default Game;

