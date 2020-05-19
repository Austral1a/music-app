import { MUSIC_VOLUME_CHANGING_UP, MUSIC_VOLUME_CHANGING_DOWN } from '../actions/action-types'

const initState = {
    musicVolume: 0
}

const musicVolumeReducer = (state = initState, action) => {
    switch (action.type) {
        case MUSIC_VOLUME_CHANGING_UP:
            return Object.assign({}, state, {
                musicVolume: musicVolume + 1
            })
        case MUSIC_VOLUME_CHANGING_DOWN:
            return Object.assign({}, state, {
                musicVolume: musicVolume - 1
            })
        default:
            return state
    }
}

export default musicVolumeReducer
