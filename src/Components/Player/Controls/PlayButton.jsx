import '../../css/Player.scss'
import sound from '../../media/Ben.mp3'
import React, { Component } from 'react'
import musicPause from '../../Store/actions/MusicPause'
import musicPlay from '../../Store/actions/MusicPlay'

import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    setMusicPlay: () => {
        dispatch(musicPlay())
    },
    setMusicPause: () => {
        dispatch(musicPause())
    },
})

const mapStateToProps = (state) => ({
    isMusicPlaying: state.playOrPauseMusicReducer.isMusicPlaying
})

class PlayButton extends Component {
    constructor(props) {
        super(props);
        this.audio = new Audio(sound);
    }

    render() {
        return (
            <button>Play</button>
        )
    }
}

const ConnectedPlayButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player)

export default ConnectedPlayButton
