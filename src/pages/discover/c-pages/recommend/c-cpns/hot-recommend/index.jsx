import React, { memo, useEffect } from 'react';
import ThemeHeaderRCM from '@/components//theme-header-rcm';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// 请求limit常量
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

import {
  HotRecommendWrapper,
} from './style';
import { getHotRecoomendsAction } from '../../store/actionCreators';


export default memo(function HotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecoomendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <div className="" key={item.name}>{item.name}</div>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
