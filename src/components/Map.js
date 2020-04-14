import React, {useRef, useEffect} from "react";
import mapRooms from '../utils/mapRooms';
import atlasImage from "../images/MapTiles.png";
import doggo from "../images/BlitzCrop.png"
import tiles from "../utils/tiles";


const MapCanvas = props => {
    const canvas = useRef(null);
    const canvas2 = useRef(null);
    const image = useRef(null);
    const spriteIm = useRef(null);

    const tileSize = 65
    const width = 24
    const height = 29
   
    // console.log("position", position)
    // useEffect(() => {
    //     let lowX = Infinity;
    //     let highX = 0;
    //     let lowY = Infinity;
    //     let highY = 0
    //     mapRooms.forEach(room => {
    //         if (room.x_coord < lowX){
    //             lowX = room.x_coord
    //         }
    //         if(room.x_coord > highX){
    //             highX = room.x_coord
    //         }
    //         if (room.y_coord < lowY){
    //             lowY = room.y_coord
    //         }
    //         if(room.y_coord > highY){
    //             highY = room.y_coord
    //         }  
    //     })
    //     let width = highX - lowX
    //     let height = highY - lowY
    //     console.log(width, height)
    //     console.log(lowX, lowY, highX, highY)
    // }, [])

    useEffect(() => {
        const ctx = canvas.current.getContext("2d")
        const imctx = image.current;
        const sprctx = spriteIm.current;
        const ctx2 = canvas2.current.getContext('2d')

        imctx.onload = () => {
            let tile;
            for (let i = 0; i < 500; i ++){
                if(typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 1
                } else if (typeof(mapRooms[i]['n']) === 'number' && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 2
                } else if (typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'number' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 3
                }else if (typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'number'){
                    tile = 4
                }else if (typeof(mapRooms[i]['n']) === 'number' && typeof(mapRooms[i]['s']) === 'number' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 5
                }else if (typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'number'){
                    tile = 6
                }else if (typeof(mapRooms[i]['n']) === 'number' && typeof(mapRooms[i]['s']) === 'number' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'number'){
                    tile = 7
                }else if (typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'number' && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'number'){
                    tile = 8
                }else if (typeof(mapRooms[i]['n']) === 'number' && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'number' ){
                    tile = 9
                }else if (typeof(mapRooms[i]['n']) === 'number' && typeof(mapRooms[i]['s']) === 'number'  && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 10
                }else if (typeof(mapRooms[i]['n']) === 'number'  && typeof(mapRooms[i]['s']) === 'number'  && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'number' ){
                    tile = 11
                }else if (typeof(mapRooms[i]['n']) === 'number'  && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'number' ){
                    tile = 12
                }else if (typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'number' && typeof(mapRooms[i]['e']) === 'object' && typeof(mapRooms[i]['w']) === 'number' ){
                    tile = 13
                }else if (typeof(mapRooms[i]['n']) === 'object' && typeof(mapRooms[i]['s']) === 'number' && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 14
                }else if (typeof(mapRooms[i]['n']) === 'number' && typeof(mapRooms[i]['s']) === 'object' && typeof(mapRooms[i]['e']) === 'number' && typeof(mapRooms[i]['w']) === 'object'){
                    tile = 15
                }
                ctx.drawImage(
                    imctx,
                    tiles[tile].x,
                    tiles[tile].y,
                    tileSize,
                    tileSize,
                    (mapRooms[i].x_coord - 50) * tileSize,
                    (74 - mapRooms[i].y_coord) * tileSize,
                    tileSize,
                    tileSize
                )
            
            }   
        }
        sprctx.onload = () => {
            ctx2.drawImage(
                sprctx,
                0,
                0,
                tileSize,
                tileSize,
                (props.position['x'] - 49.86) * tileSize,
                (74.08 - props.position['y']) * tileSize,
                tileSize,
                tileSize
            )
        } 
    });

    useEffect(() => {
        const sprctx = spriteIm.current;
        const ctx2 = canvas2.current.getContext('2d')
        
        ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height)
        ctx2.drawImage(
            sprctx,
            0,
            0,
            tileSize,
            tileSize,
            (props.position['x'] - 49.86) * tileSize,
            (74.08 - props.position['y']) * tileSize,
            tileSize,
            tileSize
        )
    }, [props.position, tileSize])

    return(
        <>
            <canvas 
                ref={canvas}
                width={width * tileSize}
                height={height * tileSize}
                
            />
            <canvas 
                ref={canvas2}
                width={width * tileSize}
                height={height * tileSize}
                style={ {position: 'absolute', left: '0'} }
            />
            <img
                ref={image}
                src={atlasImage}
                width={975}
                height={65}
                style={ {visibility: "hidden"} }
                alt='Tiles'
            />
            <img 
                ref={spriteIm}
                src={doggo}
                style={ {visibility: "hidden"} }
                alt='Player'
            />
        </>
        
    )
}

export default MapCanvas;