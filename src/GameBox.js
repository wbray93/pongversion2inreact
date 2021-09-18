import React from "react";
import './GameBox.css'
export default function GameBox() {
    return (
        <>
            <canvas id="canvas" width="900" height="800"></canvas>
            <img src="bluepaddleimage.png" id="paddleOneSource" alt=" "/>
            <img src="./Images/paddleOne.svg" id="paddleTwoSource" alt=" "/>
            <img className="pongGameBall" src={require("/Images/ponggameball.png")} alt=" " />
        </>
    )
}