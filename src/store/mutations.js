import { ADD_GOODS } from './mutations-type';

export default {
  // 1.往购物车中添加数据
  [ADD_GOODS](state, { goodsId, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;
    // 1.1 判断商品是否存在
    if (shopCart[goodsId]) {
      // 存在
      shopCart[goodsId]['num']++;
    } else {
      // 不存在
      shopCart[goodsId] = {
        num: 1,
        id: goodsId,
        name: goodsName,
        small_image: smallImage,
        price: goodsPrice,
        checked: true
      };
    }
    state.shopCart = { ...shopCart };
  }
};
