import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from "./style";

export default memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
      <div className='content'></div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})
