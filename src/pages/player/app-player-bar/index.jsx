import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider, } from 'antd';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils.js'

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator,
} from './style';
import { getSongDetailAction } from '../store/actionCreators';


export default memo(function AppPlayerBar() {

  // props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false)

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handle function
  function playMusic() {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play();
  }

  const timeUapdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(currentTime * 1000 / duration * 100);
    }

  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);
  }, [duration])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
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
      <audio ref={audioRef} onTimeUpdate={timeUapdate} />
    </PlaybarWrapper>
  )
})
