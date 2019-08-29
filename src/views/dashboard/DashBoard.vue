<template>
	<div id="dashboard">
		<van-tabbar active-color="#1989fa" v-model="active">
			<van-tabbar-item icon="home-o" replace to="/dashboard/home">主页</van-tabbar-item>
			<van-tabbar-item icon="apps-o" replace to="/dashboard/category">分类</van-tabbar-item>
			<van-tabbar-item icon="cart-o" replace to="/dashboard/cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="manager-o" replace to="/dashboard/mine">我的</van-tabbar-item>
		</van-tabbar>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive" />
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive" />
	</div>
</template>

<script>
	export default {
		name: 'DashBoard',
		data() {
			return {
				// 选中
				active: 0
			};
		}
	};
</script>

<style scoped>
</style>
