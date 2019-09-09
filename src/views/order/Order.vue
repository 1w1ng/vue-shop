<template>
  <div id="order">
    <!-- 导航栏 -->
    <van-nav-bar :border="true" :fixed="true" title="填写订单" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- 收货地址 -->
    <van-contact-card
      add-text="选择收货地址"
      style="margin-top: 3rem;"
      :type="address_type"
      :name="address_name"
      :tel="address_phone"
      @click="chooseAddress"
    />

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell is-link title="送达时间" :value="arriveDate" @click="showDatePopup" />
      <router-link :to="{ path: '/confirmOrder/orderDetail' }">
        <van-cell center is-link :value="`共${goodsCount}件`">
          <template slot="title">
            <img v-for="(goods, index) in threeShopCart" alt :src="goods.small_image" style="width: 3rem;" />
          </template>
        </van-cell>
      </router-link>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="支付方式" value="微信"></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="备注">
        <input style="text-align: right;" placeholder="选填，备注您的特殊需求！" type="text" />
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额" :value="`¥${totalPrice}`"></van-cell>
      <van-cell title="配送费" :value="`¥${disPrice}`"></van-cell>
    </van-cell-group>

    <van-submit-bar
      :price="totalPrice * 100 + disPrice * 100"
      @submit="onSubmit"
      button-text="提交订单"
      label="实付："
    ></van-submit-bar>

    <!-- 弹出时间组件 -->
    <van-popup v-model="dateShow" position="bottom" round>
      <van-datetime-picker
        v-model="currentTime"
        :filter="filter"
        type="time"
        @cancel="onDateCancel"
        @confirm="onDateConfirm"
      />
    </van-popup>

    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
import Moment from 'moment';
import { mapState } from 'vuex';

export default {
  name: 'Order',
  data() {
    return {
      // 1.地址
      address_type: 'add', //地址卡片类型
      address_name: null, //收货人姓名
      address_phone: null, //收货人电话
      address_id: null, //收货人地址ID

      // 2.时间
      dateShow: false,
      // minDate: new Date(),
      // maxDate: new Date(2019, 12, 1),
      currentTime: '12:00',

      // 3.送达时间
      arriveDate: '请选择送达时间'
    };
  },
  computed: {
    ...mapState(['shopCart', 'userInfo']),
    // 商品总件数
    goodsCount() {
      let selectedGoodsCount = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.checked) {
          selectedGoodsCount += 1;
        }
      });
      return selectedGoodsCount;
    },
    // 商品总价
    totalPrice() {
      let totalPrice = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.checked) {
          totalPrice += goods.price * goods.num;
        }
      });
      return totalPrice;
    },
    // 获取购物车前三件选中的
    threeShopCart() {
      let shopCart = [];
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.checked) {
          shopCart.push(goods);
        }
      });
      return shopCart.slice(0, 3);
    },
    // 配送费
    disPrice() {
      //商品总价大于40免配送费 小于40 3元配送费
      if (this.totalPrice > 40) {
        return 0;
      } else {
        return 3;
      }
    }
  },
  mounted() {
    // 接受收货地址
    PubSub.subscribe('userAddress', (msg, address) => {
      if (msg === 'userAddress') {
        // console.log(address);
        // 修改卡片的类型
        this.address_type = 'edit';
        this.address_name = address.name;
        this.address_phone = address.tel;
        this.address_id = address.address_id;
      }
    });
  },
  methods: {
    // 1.点击左边
    onClickLeft() {
      this.$router.back();
    },
    // 2.选择地址
    chooseAddress() {
      this.$router.push('/confirmOrder/myAddress');
    },
    // 3.提交订单
    onSubmit() {
      alert(0);
    },
    // 4.展示日期组件
    showDatePopup() {
      this.dateShow = true;
    },
    // 过滤时间
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 10 === 0);
      }
      return options;
    },
    // 5.取消时间选择
    onDateCancel() {
      this.dateShow = false;
    },
    // 6.确认时间选择
    onDateConfirm(value) {
      this.dateShow = false;
      // console.log(value);
      this.arriveDate = Moment(new Date()).format('YYYY-MM-DD') + ' ' + value;
    }
  },
  beforeDestroy() {
    PubSub.unsubscribe('userAddress');
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
