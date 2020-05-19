import '../../css/Player.scss'
import React, { Component } from 'react'
import ConnectedPlayButton from './Controls/PlayButton'

class Player extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="player-body">
                <ConnectedPlayButton />
            </div>
        )
    }
}

export default Player
