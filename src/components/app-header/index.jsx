import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft >
          <a href="#/" className="logo sprite_01"></a>
        </HeaderLeft>
        <HeaderRight ></HeaderRight>
      </div>
      <div className='divider'></div>

      <NavLink to='/'></NavLink>
      <NavLink to='/mine'></NavLink>
      <NavLink to='/friends'></NavLink>
    </HeaderWrapper>
  )
})
