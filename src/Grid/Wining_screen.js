import React from "react";

import './grid.css';
let Wining_screen = (prop) => {
    return (
        <div className="win">
            <h1>{prop.win_lost}</h1>
            <form >
                <button className="play-btn"><h3>play again!</h3></button>
            </form>
        </div>
    );
}
export default Wining_screen;