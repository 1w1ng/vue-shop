<template>
	<div id="category">
		<!-- 头部 -->
		<Header />
		<!-- 内容 -->
		<div class="listWrapper" v-if="!showLoading">
			<div class="leftWrapper">
				<ul class="wrapper">
					<li
						:class="{selected: currentIndex === index}"
						:key="cate.id"
						@click="clickLeftLi(index)"
						class="categoryItem"
						ref="menuList"
						v-for="(cate, index) in categoriesData"
					>
						<span class="textWrapper">{{cate.name}}</span>
					</li>
				</ul>
			</div>
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
	// 1.引入子组件
	import Header from './components/Header';

	// 2.引入滚动组件
	import BScroll from 'better-scroll';

	// 3.引入接口
	import { getCategories, getCategoriesDetail } from './../../service/api/index';

	export default {
		name: 'Category',
		data() {
			return {
				// 是否显示加载图标
				showLoading: false,
				// 左边列表数据
				categoriesData: [],
				// 右边列表数据
				categoriesDetail: [],
				// 左边列表选中与否
				currentIndex: 0
			};
		},
		created() {
			this.initData();
		},
		components: {
			Header
		},
		methods: {
			// 初始化操作
			async initData() {
				// 1.获取左边的数据
				let leftRes = await getCategories();
				if (leftRes.success) {
					this.categoriesData = leftRes.data.cate;
				}
				// console.log(this.categoriesData);

				// 2.获取右边的数据
				let rightRes = await getCategoriesDetail('/lk001');
				if (rightRes.success) {
					this.categoriesDetail = rightRes.data.cate;
				}
				console.log(this.categoriesDetail);

				// 3.隐藏Loading框
				this.showLoading = false;

				// 4.初始化滚动框架
				this.$nextTick(() => {
					this.leftScroll = new BScroll('.leftWrapper', { probeType: 3 });
				});
			},
			// 左边列表的点击切换
			clickLeftLi(index) {
				// 2.1 改变索引
				this.currentIndex = index;

				// 2.2 滚动到对应的位置
				let menuLists = this.$refs.menuList;
				let el = menuLists[index];

				// 2.3 滚动到对应的元素上
				this.leftScroll.scrollToElement(el, 300);
			}
		}
	};
</script>

<style scoped>
	#category {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		overflow: hidden;
	}

	.listWrapper {
		display: flex;
		position: absolute;
		top: 2.75rem;
		bottom: 3rem;
		width: 100%;
		overflow: hidden;
	}

	.leftWrapper {
		background-color: #f4f4f4;
		width: 5.3125rem;
		flex: 0 0 5.3125rem;
	}

	.categoryItem {
		padding: 0.75rem 0;
		border-bottom: solid 1px #e8e9e8;
		position: relative;
	}

	.categoryItem .textWrapper {
		line-height: 1.25rem;
		border-left: solid 0.1875rem transparent;
		padding: 0.3125rem 0.6875rem;
		font-size: 0.8125rem;
		color: #666666;
	}

	.categoryItem.selected {
		background: #fff;
	}

	.categoryItem.selected .textWrapper {
		border-left-color: #1989fa;
		font-weight: bold;
		font-size: 0.875rem;
		color: #333333;
	}

	@media (min-width: 960px) {
		.wrapper {
			border-right: 1px solid #e8e9e8;
		}

		.wrapper .categoryItem {
			background: #fff;
		}
	}
</style>
