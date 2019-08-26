<template>
	<div id="home">
		<Header />
	</div>
</template>

<script>
	// 1.引入 请求网络数据
	import { getHomeData } from './../../service/api/index';

	// 2.引入主页的子组件
	import Header from './components/header/Header';

	export default {
		name: 'Home',
		created() {
			// 2.请求网络数据
			getHomeData()
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log('error');
				});
		},
		// 注册子组件
		components: {
			Header
		}
	};
</script>

<style scoped>
</style>
