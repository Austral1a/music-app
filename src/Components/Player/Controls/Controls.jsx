import '../../../css/playerControls.scss'
import React, { Component } from 'react'
import ConnectedPlayButton from "./PlayButton";
import ConnectedVolume from "./Volume";

class PlayerControls extends Component {
    render() {
        return (
            <div className="pl-controls">
                <ConnectedPlayButton />
                <ConnectedVolume />
            </div>
        )
    }
}

export default PlayerControls
