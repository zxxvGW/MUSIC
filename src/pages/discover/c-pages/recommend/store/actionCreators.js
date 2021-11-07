import * as actionTypes from './constants';
// 网络请求recommend数据
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
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
// recommend三大排行榜
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
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


export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          console.log(res)
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  }
}