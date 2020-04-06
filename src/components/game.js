import React, {useState, useEffect} from 'react';
import axios from 'axios';
import sha256 from 'sha256';
import Map from './Map';
// import TravAlg from './initTravAlg';

import mapRooms from '../utils/mapRooms';
import '../styles/game.scss'


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
    const [inventory, setInventory] = useState({});
    const [sellItem, setSellItem] = useState({});
    const [nameChange, setNameChange] = useState({});
    const [examine, setExamine] = useState({})
    // const [traversing, setTraversing] = useState()
    const buyDonut = {"name": "donut", "confirm": "yes"}

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
    }

    const handleDropChange = e => {
        setDropItem({
            "name": e.target.value
        })
    }
    const handleSellChange = e => {
        setSellItem({
            "name": e.target.value,
            confirm: "yes"
        })
    };

    const handleNameChange = e => {
        setNameChange({
            "name": e.target.value,
            "confirm": "aye"
        })
    }

    const handleExamine = e => {
        setExamine({
            "name": e.target.value
        })
    }
    const submitTakeDrop = (action) => {
        let item
        if (action === 'take'){
            item = takeItem
        } else if (action === 'drop'){
            item = dropItem
        } else if (action === 'sell'){
            item = sellItem
        } else if (action === 'buy'){
            item = buyDonut
        } else if (action === 'change_name'){
            item = nameChange
        } else if (action === 'pray'){
            item = {"pray": "pray"}
        } else if (action === 'examine'){
            item = examine
        }
        
        axios.post(`https://lambda-treasure-hunt.herokuapp.com/api/adv/${action}`, item, config)
            .then(res => {
                setCooldown(res.data.cooldown)
                setRoomInfo(res.data)
                if(action === 'take'){
                    inventory.push(item['name'])
                } else if (action === 'drop' || action === 'sell'){
                    for (let i = 0; i < inventory.length; i++){
                        if (inventory[i] === item['name']){
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
    };

    const bfs = async (target) => {
        // setTraversing(true)
        let q = [];
        let visited = {};
        let directions = ['n', 's', 'e', 'w'];

        for(let i = 0; i < exits.length; i++){
            q.push([exits[i]])
        }    
        
        while(q.length > 0){
           
            let path = q.shift();
            let tempRoom = roomInfo.room_id;
            
            for(let i = 0; i < path.length; i++){
                tempRoom = mapRooms[tempRoom][path[i]]
            }
            if (!visited[tempRoom]){
                visited[tempRoom] = tempRoom;
                if(typeof(target) === 'number'){
                    for(let i = 0; i < directions.length; i++){
                        if (mapRooms[tempRoom][directions[i]] !== null){
                            if(mapRooms[mapRooms[tempRoom][directions[i]]]['room_id'] === target){
                                console.log('FOUND IT', path)
                                path.push(directions[i])
                                q = [];
                                return autoTrav(path, roomInfo.room_id, cooldown)
                            }
                            let pathCopy = [...path];
                            pathCopy.push(directions[i])
                            q.push(pathCopy)
                        };  
                    };
                } else if(target === 'name_changer' || target === 'shrine'){
                    for(let i = 0; i < directions.length; i++){
                        if (mapRooms[tempRoom][directions[i]] !== null){
                            if(mapRooms[mapRooms[tempRoom][directions[i]]][target] === 1){
                                console.log('FOUND IT', path)
                                path.push(directions[i])
                                q = [];
                                return autoTrav(path, roomInfo.room_id, cooldown)
                            }
                            let pathCopy = [...path];
                            pathCopy.push(directions[i])
                            q.push(pathCopy)
                        };  
                    };
                } else {
                    for(let i = 0; i < directions.length; i++){
                        if (mapRooms[tempRoom][directions[i]] !== null){
                            if(mapRooms[mapRooms[tempRoom][directions[i]]]['name'].toLowerCase().includes(target)){
                                console.log('FOUND IT', path)
                                path.push(directions[i])
                                q = [];
                                return autoTrav(path, roomInfo.room_id, cooldown)
                            }
                            let pathCopy = [...path];
                            pathCopy.push(directions[i])
                            q.push(pathCopy)
                        };  
                    };
                };
                
            };
        };
    };

    const autoTrav = (path, curId, cooldown) => {
        let nextMove = path[0];
        let nextRoom = mapRooms[curId][nextMove];
        let retArr
        // console.log(traversing)
        function x(){
            const move = new Promise((resolve) => {
                setTimeout(async () => {
                    await axios.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move', {direction: nextMove, next_room_id: `${nextRoom}`}, config)
                                .then(res => {
                                    setPosition({x: mapRooms[res.data.room_id].x_coord, y: mapRooms[res.data.room_id].y_coord})
                                    setCooldown(res.data.cooldown)
                                    setExits(res.data.exits)
                                    setRoomInfo(res.data)
                                    let newCooldown = res.data.cooldown;
                                    let curRoom = res.data.room_id;
                                    retArr = [curRoom, newCooldown]
                                    resolve('done')
                                    return retArr
                                })
                                .catch(err => {
                                    console.log("AUTOTRAV FAIL", err)
                                })
                }, cooldown * 1000)
            });
            return move
        };
        x().then(() => {
            path.shift();
            // if(traversing === false){
            //     return
            // } else 
            if(path.length > 0){
                autoTrav(path, retArr[0], retArr[1])
            } else {
                return 
            }
        })
    };

    const mine = () => {
        let last_proof;
        let difficulty;
        let retArr;
        console.log('mining')
        function proofOfWork(oldProof, difficulty){
            let proof = 0;
            while(validProof(oldProof, proof, difficulty) === false){
                proof++
            }
            console.log("valid proof found")
            return proof
        }
        function validProof(oldProof, newProof, difficulty){
            let guess = encodeURI(`${oldProof}${newProof}`)
            let guess_hash = sha256(guess);
            // console.log(guess_hash)
            let str = ''
            for(let i = 0; i < difficulty; i++){
                str = str + 0
            }
            return guess_hash.slice(0, 6) === str;
        }

        function y(){
            const getLastProof = new Promise((resolve) => {
                axios.get('https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof', config)
                    .then(res => {
                        last_proof = res.data.proof;
                        difficulty = res.data.difficulty
                        retArr = [last_proof, difficulty]
                        resolve('done')
                        return retArr
                    })
                    .catch(err => {
                        console.log('GET LAST PROOF ERR', err)
                    });
            });
            return getLastProof
        };
        y().then(async () => {
            while(true){
                let newProof = proofOfWork(retArr[0], retArr[1]);
                console.log(newProof)
                if(newProof){
                    await axios.post('https://lambda-treasure-hunt.herokuapp.com/api/bc/mine/', {"proof": newProof}, config)
                        .then(res => {
                            console.log(res.data)
                            return
                        })
                        .catch(err => {
                            console.log('SUBMIT PROOF ERR', err)
                        })
                }
            }
        })   
    };

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
                    <br/>
                    <button disabled={cooldown > 0 ? true : false} onClick={() => bfs('shop')}>Find Shop</button>
                    <button disabled={cooldown > 0 ? true : false} onClick={() => bfs('donut')}>Find Donuts</button>
                    <button disabled={cooldown > 0 ? true : false} onClick={() => bfs('name_changer')}>Find Name Changer</button>
                    <button disabled={cooldown > 0 ? true : false} onClick={() => bfs('shrine')}>Find Shrine</button>
                    <button disabled={cooldown > 0 ? true : false} onClick={() => bfs('well')}>Find Wishing Well</button>
                    <button disabled={cooldown > 0 ? true : false} onClick={() => bfs(209)}>Find Mining Room</button>
                    {/* {traversing ? 
                        <button onClick={() => {setTraversing(false); console.log('BUTTON', traversing)}}>Stop traversal</button>   
                        : null
                    } */}
                    <h4>available actions</h4>
                    {roomInfo.items ? 
                        roomInfo.items.length > 0 ?
                            <div>
                                <button disabled={cooldown > 0 ? true : false} onClick={() => submitTakeDrop('take')}>Take</button>
                                <select name='dropItem' onChange={handleTakeChange}>
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
                                <select name='dropItem' onChange={handleDropChange}>
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
                    {inventory ? 
                        inventory.length > 0 ?
                            <div>
                                <button disabled={cooldown > 0 ? true : false} onClick={() => submitTakeDrop('sell')}>Sell</button>
                                <select name='sellItem' onChange={handleSellChange}>
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
                    {roomInfo.title ? 
                        roomInfo.title.toLowerCase().includes('donut') ?
                        <button onClick={() => submitTakeDrop('buy')}>Buy Donut</button>
                        : null : null
                    }
                    {roomInfo.room_id ? 
                        mapRooms[roomInfo.room_id].name_changer === 1 ?
                        <>
                            <button onClick={() => submitTakeDrop('change_name')}>Change Name</button>
                            <input 
                                placeholder='enter new name'
                                onChange={handleNameChange}
                            />
                        </>
                        : null : null

                    }
                    <button onClick={() => submitTakeDrop('examine')}>examine</button>
                    <input 
                        placeholder='enter item/player'
                        onChange={handleExamine}
                    />
                    <button onClick={() => submitTakeDrop('pray')}>pray</button>
                    <button onClick={() => mine()}>mine</button>
                </div>

                <div className='room-info'>
                    
                    <h3>Room Info</h3>
                    {roomInfo.messages ? 
                        roomInfo.messages.length > 0 ?
                        <ul>messages:
                            {roomInfo.messages.map((message, index) => {
                                return (
                                    <li key={index}>{message}</li>
                                )
                            })}
                        </ul>
                        : null
                    : null}
                    <p>Room ID: {roomInfo.room_id}</p>
                    <p>Room Name: {roomInfo.title}</p>
                    <p>Description: {roomInfo.description}</p>
                    {/* <ul>Items: {roomInfo.items ? 
                        roomInfo.items.map((item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                        }) : null}</ul> */}
                    <p>terrain: {roomInfo.terrain}</p>
                    {roomInfo.players ?
                        roomInfo.players.length > 0 ? 
                            <p>players:
                            {roomInfo.players.map(player => {
                                return (
                                    <span key={player}>{player}, </span>
                                )
                            })}
                            </p>
                        : null
                    : null}
                    {roomInfo.errors ?
                        roomInfo.errors.length > 0 ? 
                        <ul>errors:
                            {roomInfo.errors.map((err, index) => {
                                return (
                                    <li key={index}>{err}</li>
                                )
                            })}
                        </ul>
                        : null
                    : null}
                </div>
            </section>
        </>
        
    )
}

export default Game;

