<template>
  <div class="wrapper">
    <div class="locationWrapper">
      <svg class="icon iconLocation" viewBox="0 0 32 32">
        <path
          d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
          fill="#81838E"
          fill-rule="evenodd"
        />
      </svg>
      <span class="address">{{ addr || 武汉市 }}</span>
      <svg class="icon iconArrow" viewBox="0 0 32 32">
        <path
          d="M14.724 19.17c.783.784 2.05.788 2.837 0l5.047-5.047c1.173-1.172.776-2.123-.869-2.123H10.545c-1.652 0-2.04.952-.869 2.123l5.048 5.048z"
          fill="#81838E"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <!-- <div class="searchWrapper">
      <div class="searchContent">
        <div class="iconSearchWrapper">
          <svg class="icon iconSearch" viewBox="0 0 32 32">
            <path
              d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"
              fill="#999"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <span class="searchPrompt">输入商品名称</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      longitude: 0, // 经度
      latitude: 0, // 维度
      city: '', // 城市
      addr: '' //位置
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      let geolocation = new qq.maps.Geolocation('I45BZ-N6DWO-JPVWW-S5CCR-PMS73-PEFN3', 'vue-shop');
      geolocation.getLocation(this.showPosition, this.showError);
    },
    showPosition(position) {
      console.log(position);
      this.latitude = position.lat;
      this.longitude = position.lng;
      this.city = position.city;
      this.addr = position.addr;
    },
    showError() {
      console.log('定位失败');
      // 继续定位
      this.getLocation();
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  height: 3.125rem;
  line-height: 3.125rem;
  width: 100%;
  box-sizing: border-box;
  background: white;
  border-bottom: solid 1px #eeeeee;
  border-top: solid 1px #eeeeee;
}
.iconLocation {
  position: absolute;
  left: 1.2rem;
  top: 1.2rem;
  width: 1.875rem;
  height: 1rem;
  vertical-align: middle;
}
.locationWrapper {
  float: left;
  height: 3.125rem;
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 1;
  position: relative;
  .address {
    padding-left: 2.6rem;
    font-size: 0.9rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // width: 80%;
    vertical-align: middle;
  }
  .iconArrow {
    position: absolute;
    top: 1.2rem;
    right: 0rem;
    vertical-align: middle;
  }
  &.wheel {
    opacity: 0;
    -webkit-transition: opacity 1.2s;
    transition: opacity 1.2s;
  }
}
.searchWrapper {
  position: absolute;
  top: 0.625rem;
  right: 2%;
  line-height: 3.125rem;
  text-align: right;
  width: 50%;
  vertical-align: middle;
  &.wheel {
    width: 96%;
    -webkit-transition: width 1s ease 0.2s;
    transition: width 1s ease 0.2s;
  }
}
.searchContent {
  float: right;
  border-radius: 3.125rem;
  width: 100%;
  height: 1.875rem;
  line-height: 1.875rem;
  text-align: center;
  background: #f2f2f2;
}
.iconSearchWrapper {
  display: inline-block;
  width: 1.25rem;
  height: 100%;
}
.iconSearch {
  margin-top: 0.3125rem;
  width: 1.25rem;
  height: 1.25rem;
}
.searchPrompt {
  display: inline-block;
  vertical-align: top;
  margin-left: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
  color: #999999;
}

@media (min-width: 320px) {
  .searchWrapper {
    width: 55%;
  }
}

@media (min-width: 375px) {
  .searchWrapper {
    width: 57%;
  }
}

@media (min-width: 414px) {
  .searchWrapper {
    width: 62%;
  }
}

.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
</style>
