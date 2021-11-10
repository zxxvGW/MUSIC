import * as actionTypes from './constants';
import { getSongDetail } from '../../../services/player';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playlist中是否有了该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)
    // 2.判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {// 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changePlayListAction(song))
    } else { // 没有找到
      // 请求歌曲数据
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0];
        if (!song) return

        // 1.将最新请求到的数据添加到播放列表
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 2.更新redux里的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    }
  }
}