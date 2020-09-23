import {combineReducers} from "redux"
import playOrPauseMusicReducer from "./PlayOrPauseMusicReducer"
import musicVolumeReducer from "./MusicVolumeReducer"

const rootReducer = combineReducers({
    musicVolumeReducer,
    playOrPauseMusicReducer,
})

export default rootReducer
