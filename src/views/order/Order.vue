<template>
  <div id="order">
    <!-- 导航栏 -->
    <van-nav-bar :border="true" :fixed="true" title="填写订单" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- 收货地址 -->
    <van-contact-card add-text="选择收货地址" style="margin-top: 3rem;" type="add" @click="chooseAddress" />

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell is-link title="送达时间" value="请选择送达时间" />
      <van-cell center is-link value="内容">
        <template slot="title">
          <img alt src="./images/detail1.jpg" style="width: 3rem;" />
          <img alt src="./images/detail1.jpg" style="width: 3rem;" />
          <img alt src="./images/detail1.jpg" style="width: 3rem;" />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="支付方式" value="微信"></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="备注">
        <input placeholder="选填，备注您的特殊需求！" type="text" />
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额" value="¥50.30"></van-cell>
      <van-cell title="配送费" value="¥0.00"></van-cell>
    </van-cell-group>

    <van-submit-bar :price="3050" @submit="onSubmit" button-text="提交订单" label="实付："></van-submit-bar>

    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Order',
  methods: {
    // 点击左边
    onClickLeft() {
      this.$router.back();
    },
    // 选择地址
    chooseAddress() {
      this.$router.push('/confirmOrder/myAddress');
    },
    onSubmit() {
      alert(0);
    }
  }
};
</script>

<style scoped>
#order {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}

.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
