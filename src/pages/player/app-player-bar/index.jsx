import React, { memo, useEffect } from 'react';

import { Slider, } from 'antd';

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator,
} from './style';
import { getSongDetail } from '../../../services/player';

export default memo(function AppPlayerBar() {

  // other hooks
  useEffect(() => {
    getSongDetail(167876).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img className="image" src="https://s4.music.126.net/style/web2/img/default/default_album.jpg" alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">红豆</span>
              <span className="singer-name">要不要买菜</span>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider">/</span>
                <span className="duration">03:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_palyer">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})
