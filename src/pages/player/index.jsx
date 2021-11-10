import React, { memo } from 'react';

import {
  PlayerLeft,
  PlayerRight,
  PlayerWrapper,
} from './style'

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SimiPlayList</h2>
          <h2>SimiSong</h2>
          <h2>DownLoad</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
