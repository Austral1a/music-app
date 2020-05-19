import '../../../css/playBtn.scss'
import React, { Component } from 'react'
import sound from '../../../media/Ben.mp3'
import musicPause from '../../../Store/actions/MusicPause'
import musicPlay from '../../../Store/actions/MusicPlay'

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

    launchPlayMusic = () => {
        console.log(this.props.isMusicPlaying)
        if ( this.props.isMusicPlaying ) {
            this.props.setMusicPause()
            this.audio.pause()
        } else {
            this.props.setMusicPlay()
            this.audio.play()
        }
    }

    render() {
        return (
            <button onClick={this.launchPlayMusic} className="pl-play-music">{!this.props.isMusicPlaying ?
                <span className="material-icons">
                    play_arrow
                </span>
                :
                <span className="material-icons">
                    pause
                </span>}</button>
        )
    }
}

const ConnectedPlayButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayButton)

export default ConnectedPlayButton
