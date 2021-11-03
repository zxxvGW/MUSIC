import * as actionTypes from './constants';
// 网络请求recommend数据
import { getTopBanners } from '@/services/recommend';

const changeTopBannerAtion = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  // 使用网络请求的数据作为Action的数据源
  topBanners: res.banners,
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // console.log(res)
      dispatch(changeTopBannerAtion(res))
    })
  }
}