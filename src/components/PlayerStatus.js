import React from 'react';
import '../styles/playerStatus.scss'

const StatusBox = props => {
    return(

        <section className='status-box'>
            
            <p style={ {paddingLeft:'8px'} }>name: {props.name}</p>
            <p>abilities: {props.abilities ? 
                props.abilities.map(ability => {
                    return `${ability}, `
                }): null}</p>
            <p>gold: {props.gold}</p>
            <p>speed: {props.speed}</p>
            <p>strength: {props.strength}</p>
            <p>encumbrance: {props.encumbrance}</p>
            <p>bodywear: {props.bodywear}</p>
            <p>footwear: {props.footwear}</p>

            <button 
                disabled={props.cooldown > 0 ? true : false}
                onClick={props.updateStatus}
            >Update Status (1 sec cooldown)</button>
        </section>
       
    )
};

export default StatusBox