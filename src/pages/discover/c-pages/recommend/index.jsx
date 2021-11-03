import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators'

function Recommend(props) {
  // 组件和redux关联： 获取数据和进行操作
  const recommend = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  console.log(recommend)
  return (
    <div>
      <h2>Recommend:{recommend.topBanners.length}</h2>
    </div>
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
