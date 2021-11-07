import * as actionTypes from './constants';
// 网络请求recommend数据
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
} from '@/services/recommend';

const changeTopBannerAtion = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  // 使用网络请求的数据作为Action的数据源
  topBanners: res.banners,
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
})
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // console.log(res)
      dispatch(changeTopBannerAtion(res))
    })
  }
}
export const getHotRecoomendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      // console.log(res)
      dispatch(changeHotRecommendAction(res))
    })
  }
}
export const getNwAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // console.log(res)
      dispatch(changeNewAlbumAction(res))
    })
  }
}