<template>
  <div id="addAddress">
    <!-- 导航栏 -->
    <van-nav-bar :border="true" :fixed="true" @click-left="onClickLeft" left-arrow title="添加地址" />

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
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
      this.$router.back();
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
#addAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>
