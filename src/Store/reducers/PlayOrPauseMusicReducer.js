import {MUSIC_PLAY ,MUSIC_PAUSE} from '../actions/action-types'

const initState = {
    isMusicPlaying: false
}

const playOrPauseMusicReducer = (state = initState, action) => {
    switch (action.type) {
        case MUSIC_PLAY:
            return Object.assign({}, state, {
                isMusicPlaying: true
            })
        case MUSIC_PAUSE:
            return Object.assign({}, state, {
                isMusicPlaying: false
            })
        default:
            return state
    }
}

export default playOrPauseMusicReducer
