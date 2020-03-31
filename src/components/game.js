import React from 'react';
import axios from 'axios';

var config = {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`}
}

const opposites = {"n": "s", "s": "n", "e": "w", "w": "e"}
const initialDft = async () => {
    var prevDir = null
    var prevRoom = null
    var cooldown = null
    var startRoom = null
    // get current room info
    await axios.get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, config)
        .then(res => {
            console.log(res)
            startRoom = res.data
            cooldown = res.data.cooldown
        })
        .catch(err => {
            console.log('INIT REQUEST ERR', err)
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
                console.log(res.data)
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
            curRoom.items.forEach(item => {
                setTimeout(() => {
                    axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', {name: item}, config)
                        .then(res => {
                            console.log('FROM TAKE', res)
                        })
                        .catch(err => {
                            console.log('TAKE ERR', err)
                        })
                },1000 * cooldown)
            })
        }

        let unexplored = []
        exits.forEach(item => {
            if (room[item] === -1){
                unexplored.push(item)
            }
        })
        if(unexplored.length === 0){
            return 'DFT DONE'
        }
        let nextMove = unexplored[Math.floor(Math.random() * exits.length)]
        let newCooldown = null
        let newRoom = null
        setTimeout(() => {
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
    console.log(startRoom, cooldown, prevDir, prevRoom)
    return recurser(startRoom, prevDir, prevRoom, cooldown)
}

const intialBft = (startRoom) => {

    
}

const Game = () => {

    return (
        <button onClick={() => initialDft()}>Build Map</button>
    )
}

export default Game;

