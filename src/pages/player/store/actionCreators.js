import * as actionTypes from './constants';
import { getSongDetail } from '../../../services/player';

const changeSongDetailAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

export const getSongDetailAction = (idx) => {
  return dispatch => {
    getSongDetail(idx).then(res => {
      // console.log(res)
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }

}