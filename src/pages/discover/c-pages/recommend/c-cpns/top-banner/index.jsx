import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from './style.js'

export default memo(function TopBanner() {

  // 组件和redux关联： 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.get('recommend').get('topBanners')
    // topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()
  console.log(topBanners)
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <BannerWrapper>
      <div className="banner warp-v2">
        <BannerLeft></BannerLeft>
        <BannerControl ></BannerControl>
        <BannerRight></BannerRight>
      </div>
    </BannerWrapper>
  )
})
