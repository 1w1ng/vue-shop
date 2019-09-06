<template>
  <div class="productWrapper">
    <div class="infoWrapper" v-for="(product, index) in products">
      <div class="imageWrapper">
        <div class="LazyLoad is-visible">
          <img :src="product.small_image" alt class="image" />
        </div>
      </div>
      <div class="rightWrapper">
        <div class="nameWrapper">
          <div class="name">
            <span class="nameTag nameText">{{ product.product_name }}</span>
          </div>
          <div class="spec">{{ product.spec }}</div>
        </div>
        <div class="priceWrapper">
          <div class="price">{{ product.price | moneyFormat }}</div>
          <div class="iconCartWrapper" @click="addToCart(product)">
            <svg
              class="icon"
              height="35"
              p-id="749"
              t="1566872747796"
              version="1.1"
              viewBox="0 0 1024 1024"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M581.379 644.223c-54.297 0-111.612-1.007-141.273-6.032-60.331-10.559-63.346-90.494-65.356-138.758-0.502-6.537-0.502-13.072-1.007-18.098-0.502-7.54-1.007-15.584-1.508-24.132-1.007-21.115-2.513-45.248-6.032-62.34-8.043-38.713-18.602-44.24-41.226-42.23-13.573 1.007-25.639-9.050-27.149-22.624-1.007-13.573 9.050-25.639 22.624-27.149 75.914-6.537 89.487 57.815 94.516 81.947 4.525 20.613 5.531 46.755 7.041 69.883 0.502 8.043 1.007 16.090 1.508 23.126 0.502 6.032 0.502 12.567 1.007 19.607 1.007 26.142 3.018 87.477 24.132 91.501 35.696 6.032 129.709 5.531 186.017 5.028 12.567 0 23.631 0 32.679 0 13.573 0 25.139 11.061 25.139 25.139 0 13.573-11.061 25.139-25.139 25.139-9.050 0-20.11 0-32.679 0-16.59 0-34.69 0-53.29 0z"
                fill="#1989FA"
                p-id="750"
              />
              <path
                d="M465.245 588.418c-13.072 0-23.631-10.054-24.634-23.126-1.007-13.573 9.050-25.639 23.126-26.645l129.709-9.552c18.602-1.508 34.188-3.018 40.22-7.54 5.028-3.518 9.050-15.084 12.567-35.191 2.513-13.072 4.022-26.142 6.032-40.22 1.007-7.041 2.011-14.077 3.018-20.613 2.513-18.098 3.518-29.663 2.513-34.188-2.011-1.007-8.548-2.513-26.142-2.513h-196.574c-13.573 0-25.139-11.061-25.139-25.139s11.061-25.139 25.139-25.139h196.574c24.634 0 49.269 2.513 64.353 19.607 15.584 18.098 13.573 43.236 9.050 73.904-1.007 6.537-2.011 13.573-3.018 20.11-2.011 13.573-4.022 28.155-6.537 42.23-12.567 69.883-39.214 78.932-98.035 83.455l-129.709 9.552c-1.508 1.007-2.011 1.007-2.513 1.007z"
                fill="#1989FA"
                p-id="751"
              />
              <path
                d="M460.217 712.096c14.077 0 25.639-11.562 25.639-25.639s-11.562-25.639-25.639-25.639c-14.077 0-25.639 11.562-25.639 25.639s11.562 25.639 25.639 25.639z"
                fill="#1989FA"
                p-id="752"
              />
              <path
                d="M515.518 948.89c-241.821 0-438.398-196.574-438.398-438.398 0-241.821 196.574-438.398 438.398-438.398s438.398 196.574 438.398 438.398c0 241.821-196.574 438.398-438.398 438.398zM515.518 122.37c-214.171 0-388.121 174.454-388.121 388.121 0 214.171 174.454 388.121 388.121 388.121s388.121-174.454 388.121-388.121c0.502-214.171-173.949-388.121-388.121-388.121z"
                fill="#1989FA"
                p-id="753"
              />
              <path
                d="M640.703 715.613c14.077 0 25.639-11.562 25.639-25.639s-11.562-25.639-25.639-25.639c-14.077 0-25.639 11.562-25.639 25.639 0 14.077 11.562 25.639 25.639 25.639z"
                fill="#1989FA"
                p-id="754"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
  name: 'ProductItem',
  props: {
    products: Array
  },
  methods: {
    addToCart(goods) {
      PubSub.publish('homeAddToCart', goods);
    }
  },
  beforeDestroy() {
    PubSub.unsubscribe('categoryAddToCart');
  }
};
</script>

<style scoped>
.productWrapper {
  position: relative;
  padding: 0.8125rem 0;
  background: #fff;
}

.productWrapper + .productWrapper {
  border-top: solid 1px #eeeeee;
}

.imageWrapper {
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}
.imageWrapper img {
  width: 4.0625rem;
  height: 4.0625rem;
}
.rightWrapper {
  flex: 1;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}

.noticeGreen,
.noticeGray {
  position: absolute;
  height: 100%;
  text-align: center;
}

.noticeGreen {
  background: #76da96;
  color: #fff;
}

.noticeGray {
  background: rgba(255, 255, 255, 0.6);
}

.noticeGray span {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 80%;
  text-align: center;
  color: #fff;
  font-size: 0.75rem;
  height: 1.25rem;
  line-height: 1.25rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
}

.infoWrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.625rem;
  margin-bottom: 1rem;
}

.nameWrapper {
  min-height: 2.1875rem;
}

.name {
  line-height: 1.25rem;
  word-break: break-all;
  font-size: 0.9375rem;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.name .nameTag {
  margin-right: 0.125rem;
  vertical-align: middle;
}
.name .nameText {
  vertical-align: middle;
}

.spec {
  min-height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tagsWrapper {
  margin-top: 0.1875rem;
  max-height: 1.0625rem;
  line-height: 0.8125rem;
  overflow: hidden;
}

.H1B9Rvu {
  height: 1rem;
}

.tag + .tag {
  margin-left: 0.3125rem;
}

.priceWrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 0.2rem;
}

.price {
  display: inline-block;
  height: 1.875rem;
  line-height: 1.875rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: #fe6263;
}

.originPrice {
  display: inline-block;
  margin-left: 0.3125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  text-decoration: line-through;
  font-size: 0.6875rem;
  color: #b2b2b2;
}

.iconCartWrapper {
  position: absolute;
  right: 0;
  display: flex;
}

/* .icon {
																														fill: #999;
																														width: 1rem;
																														height: 1rem;
																													}

																													.iconCart {
																														display: block;
																														width: 1.875rem;
																														height: 1.875rem;
																													} */
</style>
