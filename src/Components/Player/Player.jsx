import '../../css/Player.scss'
import React, { Component } from 'react'
import PlayerControls from "./Controls/Controls";

class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="player-body">
                <PlayerControls />
            </div>
        )
    }
}

export default Player
