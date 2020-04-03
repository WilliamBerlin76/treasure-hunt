import React, {useState, useRef, useEffect} from "react";
import mapRooms from '../utils/mapRooms';
import atlasImage from "../images/MapTiles.png";
import tiles from "../utils/tiles";
import axios from "axios"

const MapCanvas = props => {
    const canvas = useRef(null);
    const image = useRef(null);

    const [tileSize, setTileSize] = useState(65)
    const [width, setWidth] = useState(24)
    const [height, setHeight] = useState(29)

    useEffect(() => {
        let lowX = Infinity;
        let highX = 0;
        let lowY = Infinity;
        let highY = 0
        mapRooms.forEach(room => {
            if (room.x_coord < lowX){
                lowX = room.x_coord
            }
            if(room.x_coord > highX){
                highX = room.x_coord
            }
            if (room.y_coord < lowY){
                lowY = room.y_coord
            }
            if(room.y_coord > highY){
                highY = room.y_coord
            }  
        })
        let width = highX - lowX
        let height = highY - lowY
        console.log(width, height)
        console.log(lowX, lowY, highX, highY)
    }, [])

    useEffect(() => {
        const ctx = canvas.current.getContext("2d")
        const imctx = image.current;

        imctx.onload = () => {
            let tile;
            mapRooms.forEach(room => {
                if(room.n === undefined && room.s === undefined && room.e >= 0 && room.w === undefined){
                    tile = 1
                } else if (room.n >= 0 && room.s === undefined && room.e === undefined && room.w === undefined){
                    tile = 2
                } else if (room.n === undefined && room.s >= 0 && room.e === undefined && room.w === undefined){
                    tile = 3
                }else if (room.n === undefined && room.s === undefined && room.e === undefined && room.w >= 0){
                    tile = 4
                }else if (room.n >= 0 && room.s >= 0 && room.e === undefined && room.w === undefined){
                    tile = 5
                }else if (room.n === undefined && room.s === undefined && room.e >= 0 && room.w >= 0){
                    tile = 6
                }else if (room.n >= 0 && room.s >= 0 && room.e === undefined && room.w >= 0){
                    tile = 7
                }else if (room.n === undefined && room.s >= 0 && room.e >= 0 && room.w >= 0){
                    tile = 8
                }else if (room.n >= 0 && room.s === undefined && room.e >= 0 && room.w >= 0 ){
                    tile = 9
                }else if (room.n >= 0 && room.s >= 0  && room.e >= 0 && room.w === undefined){
                    tile = 10
                }else if (room.n >= 0  && room.s >= 0  && room.e >= 0 && room.w >= 0 ){
                    tile = 11
                }else if (room.n >= 0  && room.s === undefined && room.e === undefined && room.w >= 0 ){
                    tile = 12
                }else if (room.n === undefined && room.s >= 0 && room.e === undefined && room.w >= 0 ){
                    tile = 13
                }else if (room.n === undefined && room.s >= 0 && room.e >= 0 && room.w === undefined){
                    tile = 14
                }else if (room.n >= 0 && room.s === undefined && room.e >= 0 && room.w === undefined){
                    tile = 15
                }
                ctx.drawImage(
                    imctx,
                    tiles[tile].x,
                    tiles[tile].y,
                    tileSize,
                    tileSize,
                    (room.x_coord - 50) * tileSize,
                    (74 - room.y_coord) * tileSize,
                    tileSize,
                    tileSize
                )
            });
            
        }
    }, [])
    return(
        <>
            <h2>Map here</h2>
            <canvas 
                ref={canvas}
                width={width * tileSize}
                height={height * tileSize}
            />
            <img
                ref={image}
                src={atlasImage}
                width={975}
                height={65}
                style={ {visibility: "hidden"} }
                alt='Tiles'
            />
        </>
        
    )
}

export default MapCanvas;