import '../css/Player.scss'
import sound from '../media/Ben.mp3'
import React, { Component } from 'react'

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "../media/Ben.mp3";
        this.audio = new Audio(sound);
    }

    play = () => {
        this.setState({ play: true, pause: false })
        console.log(this.audio)
        this.audio.controls = true
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }

    render() {
        return (
            <div className="player-body">
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        )
    }
}
