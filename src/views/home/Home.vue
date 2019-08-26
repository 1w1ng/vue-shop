<template>
	<div id="home">
		<div v-if="!showLoading">
			<Header />
			<!-- 轮播图 -->
			<Sowing :sowing_list="sowing_list" />
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

	export default {
		name: 'Home',
		// 注册子组件
		components: {
			Header,
			Sowing
		},
		data() {
			return {
				// 首页轮播图数据
				sowing_list: [],
				// 是否显示加载图标
				showLoading: true
			};
		},
		created() {
			// 2.请求网络数据
			getHomeData()
				.then(response => {
					console.log(response);
					// 轮播图数据
					if (response.success) {
						this.sowing_list = response.data.list[0].icon_list;
						// 数据加载完成就隐藏加载动画
						this.showLoading = false;
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
