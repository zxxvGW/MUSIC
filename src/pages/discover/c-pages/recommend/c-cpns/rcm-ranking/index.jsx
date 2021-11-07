import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { RankingWrapper } from './style';
import ThemeHeaderRCM from '@/components/theme-header-rcm';

import { getTopListAction } from '../../store/actionCreators';

export default memo(function RCMRanking() {

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  )
})
