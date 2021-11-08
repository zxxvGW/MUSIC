import React, { memo, } from 'react';

import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import RCMRanking from './c-cpns/rcm-ranking';
import UserLogin from './c-cpns/user-login';
import SettleSinger from './c-cpns/settle-singer';
import HotAnchor from './c-cpns/hot-anchor'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style.js';




function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        {/* recommend 左边区域 */}
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RCMRanking />
        </RecommendLeft>
        {/* recommend 右边区域 */}
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper >
  )
}
export default memo(Recommend)

// function Recommend(props) {
//   const { getBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>Recommend</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
