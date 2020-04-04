import React from 'react';
import axios from 'axios';
import mapRooms from '../utils/mapRooms'

let config = {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`}
}

let liteMap = {};
const directions = ["n", "s", "e", "w"];
const opposites = {"n": "s", "s": "n", "e": "w", "w": "e"};
const initialDft = async () => {
    var prevDir = null
    var prevRoom = null
    var cooldown = null
    var startRoom = null
    // get current room info
    axios.get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, config)
        .then(res => {
            console.log(res)
            startRoom = res.data
            cooldown = res.data.cooldown
            console.log('DFT INIT SUCCESS')
            // console.log(startRoom, cooldown, prevDir, prevRoom)
            return recurser(startRoom, prevDir, prevRoom, cooldown)
        })
        .catch(err => {
            console.log('INIT REQUEST ERR', err)
            return setTimeout(() => {
                return initialDft()
            }, 55000)
        })
    
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
                // console.log('DFT GET BY ID',res.data)
                room = res.data
                inMap = true
            })
            .catch(err => {
                // console.log('err in getting cur room', err)
                inMap = false
            })
        if (inMap === false){
            room = {
                room_id: curRoom.room_id,
                name: curRoom.title,
                description: curRoom.description,
                elevation: curRoom.elevation,
                terrain: curRoom.terrain,
                x_coord: coordArr[0],
                y_coord: coordArr[1]
            }
            exits.forEach(item => room[item] = -1)

            if (prevD !== null){
               room[opposites[prevD]] = prevR.room_id
            }
            if (curRoom.title.toLowerCase().includes("shop") || curRoom.title.toLowerCase().includes("donut") || curRoom.description.toLowerCase().includes('shop') || curRoom.description.toLowerCase().includes('donut')){
                room["shop"] = 1
            } else if (curRoom.title.toLowerCase().includes("shrine") || curRoom.description.toLowerCase().includes("shrine")){
                room["shrine"] = 1
            } else if (curRoom.title.toLowerCase().includes("name") || curRoom.description.toLowerCase().includes("name")){
                room["name_changer"] = 1
            }

            // console.log("CHECKING ROOM DATA", room)
            await axios.post(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/`, room)
                        .then(res => {
                            // console.log(res)
                        })
                        .catch(err => {
                            console.log('ROOM', room)
                            console.log('ADD ROOM TO DB ERR', err)
                        })  
        } else if (prevD !== null){
            room[opposites[prevD]] = prevR.room_id
            await axios.put(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${curRoom.room_id}`, room)
                    .then(res => {
                        // console.log('DIRECTION UPDATE SUCCESS', res)
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
        // console.log('UNEXPLORED', unexplored)
        if(unexplored.length === 0){
            
            return initialBfs(cooldown)
            
        }
        
        
        let nextMove = unexplored[Math.floor(Math.random() * unexplored.length)]
        let nextRoom = mapRooms[curRoom.room_id][nextMove]; 
        let newCooldown = null
        let newRoom = null
        setTimeout(() => {
            // console.log('NEXT MOVE', nextMove)
            axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move', {direction: nextMove, next_room_id: `${nextRoom}`}, config)
                .then(res => {
                    console.log(res.data)
                    newCooldown = res.data.cooldown
                    newRoom = res.data
                    let changes = {}
                    changes[nextMove] = newRoom.room_id
                    // console.log('TEST CHANGES', changes)
                    axios.put(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/${curRoom.room_id}`, changes)
                        .then(res => {
                            console.log('DIRECTION UPDATE SUCCESS', res)
                        })
                        .catch(err => {
                            console.log('FAILED TO UPDATE DIRECTIONS', err)
                        })
                    // console.log('MOVE SUCCESS', newCooldown, newRoom)
                    return recurser(newRoom, nextMove, curRoom, newCooldown)
                })
                .catch(err => {
                    console.log('FROM MOVE ERR', nextMove)
                    console.log('MOVING ERR', err)
                })
        }, 1000 * cooldown)
        
        
    }
}

async function initialBfs(cooldown){

    await axios.get(`https://lambda-treasure-be.herokuapp.com/api/world/rooms/`)
            .then(res => {
                console.log('TOTAL ROOMS DRAWN', res.data.length)
                res.data.forEach(room => {
                    
                    liteMap[room.room_id] = {
                        "room_id": room.room_id,
                        "name": room.name,
                        "description": room.description,
                        "elevation": room.elevation,
                        "terrain": room.terrain,
                        "n": room.n, 
                        "s": room.s, 
                        "e": room.e, 
                        "w": room.w, 
                        "x_coord": room.x_coord, 
                        "y_coord": room.y_coord,
                        "name_changer": room.name_changer,
                        "shrine": room.shrine,
                        "shop": room.shop
                    }
                   
                })
                console.log('LITE MAP', liteMap)
                if(res.data.length === 500){
                    console.log('INITIAL TRAVERSAL COMPLETE!!!')
                    return 'Done'
                }
            })
            .catch(err => {
                console.log('GET ROOMS ERR', err)
            })
    let q = []
    let curRoom = null
    
    function y(){
        const p = new Promise((resolve, reject) => {
            setTimeout(async () => {
                await axios.get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, config)
                    .then(res => {
                        console.log(res)
                        curRoom = res.data
                        cooldown = res.data.cooldown
                        let exits = res.data.exits
                        exits.forEach(item => {
                            q.push([item])
                        })
                        resolve('Done')
                    })
                    .catch(err => {
                        console.log('INIT REQUEST ERR', err)
                    })
            }, cooldown * 1000)
        });
        return p
    }
    
    
    let visited = {}
    y().then(() => {
        while(q.length > 0){
            let path = q.shift()
            let tempRoom = curRoom.room_id

            path.forEach(dir => {
                tempRoom = liteMap[tempRoom][dir]
            });

            if (!visited[tempRoom]){
                visited[tempRoom] = tempRoom;

                for(let i = 0; i < directions.length; i++){
                    if (liteMap[tempRoom][directions[i]] !== null) {
                        if (liteMap[tempRoom][directions[i]] === -1){
                            console.log("FOUND THE ROOM")
                            q = []
                            return travelPath(path, cooldown, curRoom.room_id)
                        }
                        let pathCopy = [...path]
                        pathCopy.push(directions[i])
                        q.push(pathCopy)
                    }
                }
                
            }
        }
    })
    
}

async function travelPath(path, cooldown, curId){
    let nextMove = path[0]
    // console.log('TRAVERSEPATH',path[0])
    // console.log('COOLDOWN', cooldown)
    // console.log('CURID', curId)
    let nextRoom = mapRooms[curId][nextMove]
    // console.log('NEXTROOM', nextRoom)
    if (cooldown > 30){
        cooldown = 15
    }
    let retArr
    function x(){
        const setCooldown = new Promise((resolve, reject) => {
            setTimeout(async () => {
                await axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move', {direction: nextMove, next_room_id: `${nextRoom}`}, config)
                    .then(res => {
                        console.log('BFS MOVE SUCCESS')
                        // console.log('COOLDOWN FROM MOVE', res.data.cooldown)
                        let newCooldown = res.data.cooldown;
                        let curRoom = res.data.room_id;
                        retArr = [curRoom, newCooldown]
                        if (res.data.items > 0){
                            setTimeout(() => {
                                axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', {name: res.data.items[0]}, config)
                                    .then(res => {
                                        console.log('FROM TAKE', res)
                                    })
                                    .catch(err => {
                                        console.log('TAKE ERR', err)
                                    })
                            }, newCooldown * 1000)
                        }
                        resolve('done')
                        return retArr
                    })
                    .catch(err => {
                        console.log('BFS MOVE FAIL', err)
                        return initialDft()
                    })
            }, cooldown * 1000)
        })
        return setCooldown
    }
    
    x().then(() => {
        // console.log('COOLDOWN AFTER MOVE', retArr[1], retArr[0])
        path.shift()
        if(path.length > 0){
            
            travelPath(path, retArr[1], retArr[0])
            
        } else {
            return setTimeout(() => {
                return initialDft()
            }, retArr[1] * 1000)
    }
    })
}

const TravAlg = () => {

    return (
        <>
            <button onClick={() => initialDft()}>Build Map</button>
        </>
        
    )
}

export default TravAlg;
