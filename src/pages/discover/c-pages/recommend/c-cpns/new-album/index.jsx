import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { AlbumWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { getNwAlbumAction } from '../../store/actionCreators';


export default memo(function NewAblum() {

  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch([])

  useEffect(() => {
    dispatch(getNwAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上市" />
      <div className="content">
        <button className="arrow arrow-left"></button>
        <button className="arrow arrow-right"></button>
      </div>
    </AlbumWrapper>
  )
})
