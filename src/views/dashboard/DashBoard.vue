<template>
  <div id="dashboard">
    <van-tabbar active-color="#1989fa" v-model="active">
      <van-tabbar-item icon="home-o" replace to="/dashboard/home">主页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" replace to="/dashboard/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" replace to="/dashboard/cart" :info="goodsNum > 0 ? goodsNum : ''"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" replace to="/dashboard/mine">我的</van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { getGoodsCart } from './../../service/api/index';
import { setStore } from './../../config/global';

export default {
  name: 'DashBoard',
  data() {
    return {
      // 选中
      active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0
    };
  },
  watch: {
    active(value) {
      let tabBarActiveIndex = value > 0 ? value : 0;
      // 缓存到本地
      sessionStorage.setItem('tabBarActiveIndex', value);
    }
  },
  computed: {
    ...mapState(['shopCart', 'userInfo']),
    goodsNum() {
      if (this.shopCart) {
        // 总的购物车商品数量
        let num = 0;
        Object.values(this.shopCart).forEach((goods, index) => {
          num += goods.num;
        });
        return num;
      } else {
        return 0;
      }
    }
  },
  mounted() {
    // 0.自动登录
    this.reqUserInfo();

    // 1。获取购物车的数据
    this.initShopCart();
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART']),
    ...mapActions(['reqUserInfo']),
    async initShopCart() {
      // 已经登录
      if (this.userInfo.token) {
        // 1. 获取当前用户购物车中的商品(服务器端)
        let result = await getGoodsCart(this.userInfo.token);
        console.log(result);
        // 2. 如果获取成功
        if (result.success_code === 200) {
          let cartArr = result.data;
          let shopCart = {};
          // 2.1 遍历
          cartArr.forEach(value => {
            shopCart[value.goods_id] = {
              num: value.num,
              id: value.goods_id,
              name: value.goods_name,
              small_image: value.small_image,
              price: value.goods_price,
              checked: value.checked
            };
          });
          // 2.2 本地数据同步
          setStore('shopCart', shopCart);
          this.INIT_SHOP_CART();
        }
      }
    }
  }
};
</script>

<style scoped></style>
