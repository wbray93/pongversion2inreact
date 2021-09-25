import React from "react";
import './GameBox.css'
export default function GameBox() {
    return (
        <>
            <canvas id="canvas" width="900" height="800"></canvas>
            <img className="pongPaddleTwo" src="/Images/bluepaddleimage.png" alt=" "/>
            <img className="pongPaddleOne" src="/Images/paddleOne.svg" alt=" "/>
            <img className="pongGameBall" src="/Images/ponggameball.png" alt=" " />

            
        </>
    )
}