<template>
  <div id="myAddress">
    <!-- 导航栏 -->
    <van-nav-bar :border="true" :fixed="true" @click-left="onClickLeft" left-arrow left-text="返回" title="我的地址" />
    <van-address-list :list="list" @add="onAdd" @edit="onEdit" style="margin-top: 3rem;" v-model="chosenAddressId" />

    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { getUserAddress } from './../../../service/api/index';
import { mapState } from 'vuex';
import PubSub from 'pubsub-js';

export default {
  name: 'MyAddress',
  data() {
    return {
      chosenAddressId: '1',
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        // },
        // {
        //   id: '2',
        //   name: '李四',
        //   tel: '1310000000',
        //   address: '浙江省杭州市拱墅区莫干山路 50 号'
        // }
      ]
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    this.initUserAddress();
    // 订阅添加地址成功
    PubSub.subscribe('backToMyAddress', msg => {
      if (msg === 'backToMyAddress') {
        this.initUserAddress();
      }
    });
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onAdd() {
      // Toast('新增地址');
      this.$router.push({
        path: '/confirmOrder/myAddress/addAddress'
      });
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index);
      this.$router.push({
        path: '/confirmOrder/myAddress/editAddress?address_id=' + item.address_id
      });
    },

    // 获取当前用户的地址
    async initUserAddress() {
      // 处于登录状态
      if (this.userInfo.token) {
        let result = await getUserAddress(this.userInfo.token);
        if (result.success_code === 200) {
          let addressArr = result.data;
          this.list = [];
          addressArr.forEach((address, index) => {
            let addressObj = {
              id: String(index + 1),
              name: address.address_name,
              tel: address.address_phone,
              address: address.address_area + address.address_area_detail,
              address_id: address._id,
              user_id: address.user_id
            };
            // 追加到数组
            this.list.push(addressObj);
          });
        } else {
          Toast({
            message: '获取地址失败！',
            duration: 400
          });
        }
      } else {
        Toast({
          message: '登录已过期，请退出登录！',
          duration: 400
        });
      }
    },
    // 返回选中的地址
    onBackAddress(item, index) {
      // console.log(item, index);
      if (item) {
        // 发布地址数据
        PubSub.publish('userAddress', item);
        // 返回上一级界面
        this.$router.back();
      }
    }
  },
  beforeDestroy() {
    PubSub.unsubscribe('backToMyAddress');
  }
};
</script>

<style scoped>
#myAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 200;
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
