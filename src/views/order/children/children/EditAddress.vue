<template>
  <div id="editAddress">
    <!-- 导航栏 -->
    <van-nav-bar :border="true" :fixed="true" @click-left="onClickLeft" left-arrow title="修改地址" />

    <van-address-edit
      :area-list="areaList"
      :search-result="searchResult"
      @change-detail="onChangeDetail"
      @delete="onDelete"
      @save="onSave"
      show-delete
      show-postal
      show-search-result
      show-set-default
      style="margin-top: 3rem;"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'AddAddress',
  data() {
    return {
      areaList: {},
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
#editAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>
