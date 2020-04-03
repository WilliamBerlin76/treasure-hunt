import React from 'react';
import axios from 'axios';
import Map from './Map'
import TravAlg from './initTravAlg';

let config = {
    headers: { 'Authorization': `Token ${process.env.REACT_APP_API_TOKEN}`}
}


const Game = () => {

    return (
        <>
            <TravAlg />
            <Map />
        </>
        

    )
}

export default Game;

