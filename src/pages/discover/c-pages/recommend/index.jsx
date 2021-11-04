import React, { memo, } from 'react';
import TopBanner from './c-cpns/top-banner';

import { RecommendWarpper } from './style.js';

function Recommend(props) {
  return (
    <RecommendWarpper>
      <TopBanner />
    </RecommendWarpper>
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
