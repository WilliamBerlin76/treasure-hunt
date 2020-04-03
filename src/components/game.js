import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Map from './Map'
import TravAlg from './initTravAlg';

import mapRooms from '../utils/mapRooms';
import '../styles/game.scss'
import { wait } from '@testing-library/react';

let config = {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`}
}


const Game = () => {
    const [cooldown, setCooldown] = useState();
    const [position, setPosition] = useState({});
    const [exits, setExits] = useState([]);
    const [roomInfo, setRoomInfo] = useState({});
    const [takeItem, setTakeItem] = useState({});
    const [dropItem, setDropItem] = useState({});
    const [inventory, setInventory] = useState({})

    useEffect(() => {
        axios.get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, config)
        .then(res => {
            let curRoom = res.data.room_id;
            
            setPosition({x: mapRooms[curRoom].x_coord, y: mapRooms[curRoom].y_coord})
            setCooldown(res.data.cooldown)
            setExits(res.data.exits)
            setRoomInfo(res.data)
            setTimeout(() => {
                axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/status',{}, config)
                    .then(res => {
                        setInventory(res.data.inventory)
                        console.log("STATUS", res.data)
                    })
                    .catch(err => {
                        console.log('ERROR GETTING PLAYER STATUS', err)
                    })
            }, 1200)
        })
        .catch(err => {
            console.log('INIT ERR', err)
            alert('There was an error getting info, please wait for cooldown to finish')
        })
        
    }, [])
    // console.log(roomInfo.items)

    useEffect(() => {
        let waitTime
        if(cooldown){
            if(cooldown.toString().includes(".")){
                waitTime = 1500
            } else {
                waitTime = 1000
            }
        }
        if(cooldown > 0){
            setTimeout(() => {
                setCooldown(Math.floor(cooldown - 1))
            }, waitTime)
        } 
    }, [cooldown])


    const handleTakeChange = e => {
        setTakeItem({
            "name": e.target.value
        })
        console.log(takeItem)
    }

    const handleDropChange = e => {
        setDropItem({
            "name": e.target.value
        })
        console.log(dropItem)
    }

    const submitTakeDrop = (action) => {
        let item
        action === 'take' ? item = takeItem : item = dropItem
        axios.post(`https://lambda-treasure-hunt.herokuapp.com/api/adv/${action}`, item, config)
            .then(res => {
                setCooldown(res.data.cooldown)
                setRoomInfo(res.data)
                if(action === 'take'){
                    inventory.push(item['name'])
                } else if (action === 'drop'){
                    for (let i = 0; i < inventory.length; i++){
                        if (inventory[i] === dropItem['name']){
                            inventory.splice(i, 1)
                            break
                        }
                    }
                }
            })
            .catch(err => {
                console.log('TAKE/DROP ITEM ERR', err)
            })
    };

    const handleMove = (dir) => {
        let nextRoom = mapRooms[roomInfo.room_id][dir]
        console.log(nextRoom)
        axios.post(`https://lambda-treasure-hunt.herokuapp.com/api/adv/move`, {direction: dir, next_room_id: `${nextRoom}`}, config)
            .then(res => {
                let curRoom = res.data.room_id;

                setPosition({x: mapRooms[curRoom].x_coord, y: mapRooms[curRoom].y_coord})
                setCooldown(res.data.cooldown)
                setExits(res.data.exits)
                setRoomInfo(res.data)
            })
            .catch(err => {
                console.log('MOVE ERR', err)
                alert('There was an error moving, please be sure you have waited the cooldown time')
            })
    }
    return (
        <>
            {/* <TravAlg /> */}
            <Map 
                position={position}
            />
            <section className='side-hud'>
                <div className="display-cooldown">
                    <h3>COOLDOWN</h3>
                    {cooldown !== NaN ? 
                        <h1>{cooldown}</h1>
                        : null
                    }  
                </div>
                <div className="actions">
                    <h3>ACTIONS</h3>
                    <h4>available moves</h4>
                    {exits.map((dir) => {
                        return (
                            <button disabled={cooldown > 0 ? true : false} key={dir} className='move-buttons' onClick={() => handleMove(dir)} >{dir}</button>
                        )
                    })}
                    <h4>available actions</h4>
                    {roomInfo.items ? 
                        roomInfo.items.length > 0 ?
                            <div>
                                <button disabled={cooldown > 0 ? true : false} onClick={() => submitTakeDrop('take')}>Take</button>
                                <select name='takeItem' onChange={handleTakeChange}>
                                    <option hidden=''>Select Item</option>
                                    {roomInfo.items.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        : null
                        : null
                    }
                    {inventory ? 
                        inventory.length > 0 ?
                            <div>
                                <button disabled={cooldown > 0 ? true : false} onClick={() => submitTakeDrop('drop')}>Drop</button>
                                <select name='takeItem' onChange={handleDropChange}>
                                    <option hidden=''>Select Item</option>
                                    {inventory.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        : null
                        : null
                    }
                </div>

                <div className='room-info'>
                    <h3>Room Info</h3>
                    <p>Room ID: {roomInfo.room_id}</p>
                    <p>Room Name: {roomInfo.title}</p>
                    <p>Description: {roomInfo.description}</p>
                    <ul>Items: {roomInfo.items ? 
                        roomInfo.items.map((item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                        }) : null}</ul>
                    <p>terrain: {roomInfo.terrain}</p>
                    {roomInfo.players ? 
                        <p>players:
                        {roomInfo.players.map(player => {
                            return (
                                <span key={player}>{player}, </span>
                            )
                        })}
                        </p>
                    : null}
                    {roomInfo.errors ? 
                        <ul>errors:
                            {roomInfo.errors.map((err, index) => {
                                return (
                                    <li key={index}>{err}</li>
                                )
                            })}
                        </ul>
                    : null}
                    {roomInfo.messages ? 
                        <ul>messages:
                            {roomInfo.messages.map((message, index) => {
                                return (
                                    <li key={index}>{message}</li>
                                )
                            })}
                        </ul>
                    : null}
                </div>
            </section>
        </>
        
    )
}

export default Game;

