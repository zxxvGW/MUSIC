import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators'

function Recommend(props) {
  const { getBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})
const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
