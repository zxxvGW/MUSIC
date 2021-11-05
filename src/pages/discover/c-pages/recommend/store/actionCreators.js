import * as actionTypes from './constants';
// 网络请求recommend数据
import {
  getTopBanners,
  getHotRecommends,
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