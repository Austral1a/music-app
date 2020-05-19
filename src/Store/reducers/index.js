import {combineReducers} from "redux"
import playOrPauseMusic from "./reducers/PlayOrPauseMusicReducer"

const rootReducer = combineReducers({
    playOrPauseMusic,
})

export default rootReducer
