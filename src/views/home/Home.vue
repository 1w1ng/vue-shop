<template>
	<div id="home">
		<Header />
		<!-- 轮播图 -->
		<Sowing :sowing_list="sowing_list" />
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
				sowing_list: []
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
