import { MUSIC_VOLUME_CHANGING } from './action-types'

const musicVolumeChanging = (vol = 0) => ({
    type: MUSIC_VOLUME_CHANGING,
    vol,
})

export default musicVolumeChanging
