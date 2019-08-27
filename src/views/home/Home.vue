<template>
	<div id="home">
		<div v-if="!showLoading">
			<Header />
			<!-- 轮播图 -->
			<Sowing :sowing_list="sowing_list" />
			<Nav :nav_list="nav_list" />
			<!-- 限时抢购 -->
			<FlashSale :flash_sale_product_list="flash_sale_product_list" />
		</div>
		<van-loading
			color="#1989fa"
			style="position:absolute;left:50%;top:40%;transform: translate(-50%)"
			type="spinner"
			v-else
			vertical
		>页面正在加载中...</van-loading>
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

	export default {
		name: 'Home',
		// 注册子组件
		components: {
			Header,
			Sowing,
			Nav,
			FlashSale
		},
		data() {
			return {
				// 首页轮播图数据
				sowing_list: [],
				// Nav数据
				nav_list: [],
				// 限时抢购数据
				flash_sale_product_list: [],
				// 是否显示加载图标
				showLoading: true
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
						// 数据加载完成就隐藏加载动画
						this.showLoading = false;
						// nav数据
						this.nav_list = response.data.list[2].icon_list;
						// 限时抢购数据
						this.flash_sale_product_list = response.data.list[3].product_list;
					}
				})
				.catch(error => {
					console.log('error');
				});
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
