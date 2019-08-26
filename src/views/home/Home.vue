<template>
	<div id="home">主页</div>
</template>

<script>
	// 1.引入 请求网络数据
	import { getHomeData } from './../../service/api/index';

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
		}
	};
</script>

<style scoped>
</style>
