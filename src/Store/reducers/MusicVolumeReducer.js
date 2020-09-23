import { MUSIC_VOLUME_CHANGING } from '../actions/action-types'

const initState = {
    musicVolume: 10
}

const musicVolumeReducer = (state = initState, action) => {
    switch (action.type) {
        case MUSIC_VOLUME_CHANGING:
            return Object.assign({}, state, {
                musicVolume: action.vol,
            })
        default:
            return state
    }
}

export default musicVolumeReducer
