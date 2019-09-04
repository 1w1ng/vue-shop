<template>
  <div id="mine">
    <van-nav-bar :border="false" :fixed="true" title="我的"></van-nav-bar>

    <van-cell-group style="margin-top: 2.3rem">
      <van-cell :center="true" is-link label-class="labelClass" style="background-color: #1989fa; color: #fff;">
        <template slot="title">
          <div class="personMsg">
            <img src="./images/wing.jpg" alt />
            <div class="personInfo">
              <span>黄传波</span>
              <span>手机号：15623886416</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell icon="label" is-link title="我的订单" value="查看所有的订单"></van-cell>
      <van-grid>
        <van-grid-item v-for="(order, index) in orderData" :key="index" :icon="order.icon" :text="order.title" />
      </van-grid>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell icon="gold-coin" is-link title="我的优惠券" value="1张"></van-cell>
      <van-cell icon="send-gift" is-link title="我的收货地址" value=""></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell icon="phone" is-link title="联系客服" value="客服时间 07:00-22：00"></van-cell>
      <van-cell icon="smile-comment" is-link title="意见反馈" value=""></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data() {
    return {
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'logistics', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ]
    };
  }
};
</script>

<style scoped>
#mine {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.van-nav-bar {
  background-color: #1989fa;
}

.van-nav-bar__title {
  color: #fff;
  font-size: 1rem;
}

.personMsg {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.personMsg > img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0.12rem solid #fff;
}

.personInfo {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
}

.van-cell__left-icon {
  color: #1989fa;
  font-size: 1.2rem;
}
.van-cell__right-icon {
  color: #808080;
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
