<template>
	<swiper :options="swiperOption" id="swiper" ref="mySwiper">
		<!-- slides -->
		<swiper-slide :key="sowing.public_id" v-for="(sowing,index) in sowing_list">
			<img :alt="sowing.public_name" :src="sowing.icon_url" />
		</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import 'swiper/dist/css/swiper.css';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';

	export default {
		name: 'Sowing',
		props: {
			sowing_list: Array
		},
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					// 分页
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					// 循环
					loop: true,
					// 切换时长
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					},
					// 速度
					speed: 600,
					// 滑动后回调函数
					on: {
						slideChangeTransitionEnd() {
							// console.log(this.activeIndex);
						}
					}
				}
			};
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			// current swiper instance
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			console.log('this is current swiper instance object', this.swiper);
			this.swiper.slideTo(3, 1000, false);
		}
	};
</script>

<style scoped>
	#swiper {
		width: 100%;
		height: 14rem;
		background-color: transparent;
	}
	#swiper img {
		width: 100%;
		height: 100%;
	}

	/* 穿透修改样式 */
	#swiper >>> .swiper-pagination-bullet-active {
		background-color: #1989fa;
	}
</style>
