import React, { PureComponent } from 'react'
import '../../../css/playerVolume.scss'
import musicVolumeChanging from "../../../Store/actions/MusicVolumeChanging"

import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    musicVolChanging: (vol) => {
        dispatch(musicVolumeChanging(vol))
    },
})

const mapStateToProps = (state) => ({
    musicVolume: state.musicVolumeReducer.musicVolume
})

class Volume extends PureComponent {
    constructor(props) {
        super(props);
    }


    handleChange = (event) => {
        this.props.musicVolChanging(event.target.value)
    }

    render() {
        return (
            <>
                    <input
                    value={this.props.musicVolume}
                    onChange={this.handleChange}
                    step="1"
                    type="range"
                    min="0"
                    max="100"
                    className="range blue" />
                    </>
                )
    }
}

const ConnectedVolume = connect(
    mapStateToProps,
    mapDispatchToProps
)(Volume)

export default ConnectedVolume
