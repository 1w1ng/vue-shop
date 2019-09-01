<template>
  <div id="home">
    <div v-if="!showLoading">
      <Header />
      <!-- 轮播图 -->
      <Sowing :sowing_list="sowing_list" />
      <Nav :nav_list="nav_list" />
      <!-- 限时抢购 -->
      <FlashSale :flash_sale_product_list="flash_sale_product_list" />
      <!-- 猜你喜欢 -->
      <YouLike :you_like_product_list="you_like_product_list" />
      <!-- 返回顶部 -->
      <MarkPage :scrollToTop="scrollToTop" v-if="showBackStatus" />
    </div>
    <van-loading
      color="#1989fa"
      style="position:absolute;left:50%;top:40%;transform: translate(-50%)"
      type="spinner"
      v-else
      vertical
      >页面正在加载中...</van-loading
    >
  </div>
</template>

<script>
// 1.引入 请求网络数据
import { getHomeData } from './../../service/api/index';

// 2.引入主页的子组件
import Header from './components/header/Header';
import Sowing from './components/sowing/Sowing';
import Nav from './components/nav/Nav';
import FlashSale from './components/flashSale/FlashSale';
import YouLike from './components/youlike/YouLike';
import MarkPage from './components/markPage/MarkPage';

// 3.引入返回顶部的函数
import { showBack, animate } from './../../config/global';

// 4.引入通知插件
import PubSub from 'pubsub-js';
import { Toast } from 'vant';

// 5.引入vuex
import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  // 注册子组件
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike,
    MarkPage
  },
  data() {
    return {
      // 首页轮播图数据
      sowing_list: [],
      // Nav数据
      nav_list: [],
      // 限时抢购数据
      flash_sale_product_list: [],
      // 猜你喜欢数据
      you_like_product_list: [],
      // 是否显示加载图标
      showLoading: true,
      // 是否显示返回顶部的按钮
      showBackStatus: false
    };
  },
  created() {
    // 2.请求网络数据
    getHomeData()
      .then(response => {
        console.log(response);
        if (response.success) {
          // 轮播图数据
          this.sowing_list = response.data.list[0].icon_list;
          // nav数据
          this.nav_list = response.data.list[2].icon_list;
          // 限时抢购数据
          this.flash_sale_product_list = response.data.list[3].product_list;
          // 猜你喜欢数据
          this.you_like_product_list = response.data.list[12].product_list;

          // 数据加载完成就隐藏加载动画
          this.showLoading = false;

          // 开始监听滚动,到达一定位置就显示返回顶部按钮
          showBack(status => {
            this.showBackStatus = status;
          });
        }
      })
      .catch(error => {
        console.log('error');
      });
  },
  mounted() {
    // 订阅消息（添加到购物车的消息）
    PubSub.subscribe('homeAddToCart', (msg, goods) => {
      if (msg === 'homeAddToCart') {
        this.ADD_GOODS({
          goodsId: goods.id,
          goodsName: goods.name,
          goodsPrice: goods.price,
          smallImage: goods.small_image
        });
        Toast({
          message: '添加到购物车成功！',
          duration: 800
        });
      }
    });
  },
  methods: {
    ...mapMutations(['ADD_GOODS']),
    // 返回顶部
    scrollToTop() {
      // 做缓动动画返回顶部
      let docB = document.documentElement || document.body;
      animate(docB, { scrollTop: '0' }, 400, 'ease-out');
    }
  }
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 300rem;
  background-color: #f5f5f5;
}
</style>
