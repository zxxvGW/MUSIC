import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// 组件
import { Carousel } from 'antd';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover';

import { AlbumWrapper } from './style'
// 数据操作
import { getNwAlbumAction } from '../../store/actionCreators';
export default memo(function NewAblum() {

  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch([])

  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNwAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上市" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prve()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <AlbumCover
                          key={iten.id}
                          info={iten}
                          size={100}
                          width={118}
                          bgp="-570px"
                        >
                          {iten.name}
                        </AlbumCover>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
