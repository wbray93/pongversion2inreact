import React from "react";
import "./Background.css"

export default function Background() {
    return (
    <>
        <h1 className="gameTitle">Super Awesome Pong Game</h1>
        <h4 className="gameTitle">Player 1 Controls: Move up: W key Move down: S key</h4>
        <h4 className="gameTitle">Player 2 Controls: Move up: Up Arrow key Move down: Down Arrow key</h4>
        <h4 className="gameTitle">Press Spacebar to start</h4>
    </>
    )
}