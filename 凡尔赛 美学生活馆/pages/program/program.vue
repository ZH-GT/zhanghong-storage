<template>
	<view class="F">
		<image class="background" src="/static/background.png"></image>
		<view class="search">
			<image class="fairy" src="/static/search.png"></image>
			<input class="search-input" type="text" placeholder="请输入搜索内容" />
			<view class="button">
				<image class="whitesearch" src="/static/searchwhite.png"></image>
				<text class="search-btn-text">搜索</text>
			</view>
		</view>

		<view class="sider">
			<view v-for="(item, index) in sidebarItems" :key="item.id" class="box" @click="onSidebarBoxClick(index)">
				<view class="sider-text-wrap">
					<text class="sider-text"
						:class="{ 'sider-text--active': selectedSidebar === index }">{{ item.title }}</text>
				</view>
				<view class="label-slot">
					<view v-show="selectedSidebar === index" class="label" />
				</view>

			</view>


			<image class="p-1" src="/static/lg.png"></image>
			<view class="box-1" @click="skipGoodsdetail" >
				<image class="p-2" src="/static/lg.png"></image>
				<text class="box-1-text"> 蝶羽花影-章若楠同款裸妆太阳花翘睫</text>
				<view class="box-1-text1"><text>￥368</text></view>


			</view>
			<view class="box-2">
				<image class="p-3" src="/static/lg.png"></image>
				<text class="box-2-text"> 品质纯色美甲-TNICEDINGJ日式温柔京都系列胶</text>
				<view class="box-2-text1"><text>￥368</text></view>
			</view>
			<view class="BF">
				<text class="bf">美甲</text>
			</view>
			<view style="position:absolute; top:720rpx; left:192rpx; width:500rpx; height:60rpx;">
				<scroll-view class="scroll" scroll-x enable-flex enhanced scroll-with-animation :show-scrollbar="false" :scroll-into-view="scrollIntoView" @scroll="onScroll">
					<view class="scroll-parent">
						<view class="scroll-child" v-for="(item,index) in object" :key="index"
							:class="{active:currentIndex===index}" @click="handleItemClick(index)" :id="'item-' + index">
							{{item}}
						</view>


					</view>
				</scroll-view>
			</view>
		</view>
		<view class="picture-box">
			<image class="picture" src="/static/lg.png" mode=""></image>
			<view class="flex-box">
				<text class="flex-text1">时尚款式本甲</text>
				<text class="flex-text2">￥228</text>

			</view>

		</view>

	</view>



	<view class="fixed">
		<view class="nav-item">
			<image @click="switchTab(1)" class="fairy" :src="active===1?'/static/whitehome.png':'/static/blackhome.png'">
			</image>
		</view>
		<view class="nav-item">
			<image @click="switchTab(2)" class="fairy"
				:src="active===2?'/static/whiteprogram.png':'/static/blackprogram.png' "></image>
		</view>
		<view class="nav-item">
			<image @click="switchTab(3)" class="fairy" :src="active===3?'/static/whiteme.png':'/static/blackme.png' ">
			</image>
		</view>



	</view>
</template>

<script setup>
	const skipGoodsdetail =()=>{
		uni.navigateTo({
			url:"/pages/program/goods-detail/goods-detail"
		})
	}
	import {
		ref
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app';
	const object = ref(["全部", "纯色/跳色", "跳色", "护理", "款式", "护理", "卸甲"])
	const currentIndex = ref(0)
	const scrollIntoView = ref('')
	const sidebarItems = [{
			id: 'hot',
			title: '热门',
			path: null
		},
		{
			id: 'meijia',
			title: '美甲',
			path: '/pages/program/meijia/meijia'
		},
		{
			id: 'meijie',
			title: '美睫',
			path: '/pages/program/meijie/meijie'
		},
		{
			id: 'yan',
			title: '眉眼唇半\n永久定妆',
			path: '/pages/program/yan/yan'
		}
	];
	const selectedSidebar = ref(0);

	const onSidebarBoxClick = (index) => {
		selectedSidebar.value = index;
		const path = sidebarItems[index]?.path;
		if (path) {
			uni.navigateTo({
				url: path
			});
		}
	};

	const active = ref(2);
	const tabUrlMap = {
		1: '/pages/index/index',
		2: '/pages/program/program',
		3: '/pages/myself/myself'
	};
	const routeActiveMap = {
		'/pages/index/index': 1,
		'/pages/program/program': 2,
		'/pages/myself/myself': 3
	};

	onShow(() => {
		const pages = getCurrentPages();
		const route = pages[pages.length - 1]?.route;
		active.value = routeActiveMap[`/${route}`] || 2;
	});

	const switchTab = (num) => {
		if (active.value === num) return;
		active.value = num;
		setTimeout(() => {
			uni.switchTab({
				url: tabUrlMap[num]
			});
		}, 16);
	};

	const handleItemClick = (index) => {
		currentIndex.value = index;
		// 滚动到点击的项
		scrollIntoView.value = 'item-' + index;
		// 清空 scrollIntoView 以允许再次滚动
		setTimeout(() => {
			scrollIntoView.value = '';
		}, 100);
	};

	const onScroll = (e) => {
		// 可以在这里添加滚动相关的逻辑
	};
</script>
<style>
	.flex-box {
		display: flex;
		flex-direction: column;
		margin-left: 12rpx;
	}

	.flex-text2 {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 20rpx;
		color: #E7AD6A;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-top: 70rpx;
	}

	.flex-text1 {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-top: 12rpx;
	}

	.picture {
		border-radius: 8rpx;
		width: 160rpx;
		height: 160rpx;
	}

	.picture-box {
		position: absolute;
		width: 542rpx;
		height: 160rpx;
		top: 1332rpx;
		left: 192rpx;
		/* 		z-index: 999; */
		background-color: #04070C;
		margin-top: 8rpx;
		border-radius: 8rpx;
		display: flex;
	}

	.scroll-child.active {
		background: #FFFFFF !important;
		color: black !important;

	}

	.scroll-child {
		flex-shrink: 0;
		white-space: nowrap;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.8);
		text-align: center;
		font-style: normal;
		text-transform: none;
		padding: 4rpx 20rpx;
		min-width: 96rpx;
		border-radius: 4rpx;
		background-color: rgba(255, 255, 255, 0.1);

	}

	.scroll-parent {
		width: fit-content;
		gap: 30rpx;
		display: flex;
		padding: 4rpx 20rpx;

	}

	.scroll {
		white-space: nowrap;
		z-index: 999;
		height: 100%;
		width: 100%;
		flex-shrink: 0;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
	}

	.scroll:active {
		-webkit-tap-highlight-color: transparent;
	}

	.scroll::-webkit-scrollbar {
		/* 适配其他平台的滑动条隐藏 */
		display: none;
		width: 0;
		height: 0;
	}

	.BF {
		width: 60rpx;
		height: 42rpx;
		position: absolute;
		left: 192rpx;
		top: 650rpx;
	}

	.bf {
		width: 60rpx;
		height: 42rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.box-2-text1 {
		position: absolute;
		margin-left: 172rpx;
		top: 110rpx;
		width: 72rpx;
		height: 40rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 20rpx;
		color: #E7AD6A;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.box-2-text {
		width: 370rpx;
		height: 80rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-left: 12rpx;
	}

	.p-3 {
		width: 160rpx;
		height: 160rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;

	}

	.box-2 {
		background-color: #04070C;
		position: absolute;
		width: 542rpx;
		height: 160rpx;
		left: 192rpx;
		margin-top: 464rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;

	}

	.box-1-text1 {
		position: absolute;
		margin-left: 172rpx;
		top: 110rpx;
		width: 72rpx;
		height: 40rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 20rpx;
		color: #E7AD6A;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.box-1-text {
		width: 370rpx;
		height: 80rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-left: 12rpx;
	}

	.p-2 {
		width: 160rpx;
		height: 160rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;

	}

	.box-1 {
		background-color: #04070C;
		position: absolute;
		width: 542rpx;
		height: 160rpx;
		left: 192rpx;
		margin-top: 280rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;

	}

	.p-1 {
		position: absolute;
		left: 192rpx;
		margin-top: 10rpx;
		width: 542rpx;
		height: 248rpx;
	}

	.sider-text-wrap {
		align-self: stretch;
		width: 100%;
		flex: 0 1 auto;
		min-width: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sider-text {
		width: 100%;
		white-space: pre-wrap;
		word-break: break-all;
		line-height: 1.4;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.sider-text--active {
		font-weight: bold;
	}

	.label-slot {
		align-self: center;
		min-height: 20rpx;
		margin-top: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.label {
		width: 16rpx;
		height: 8rpx;
		background: #FFFFFF;
		border-radius: 4rpx 4rpx 4rpx 4rpx;
	}

	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #090D12;
		width: 176rpx;
		min-height: 136rpx;
		height: auto;
		padding: 12rpx;
		box-sizing: border-box;
	}

	.sider {
		display: flex;
		flex-direction: column;
		width: 176rpx;
		height: 1068rpx;
		top: 556rpx;
		left: 0;
		position: absolute;
		background-color: #090D12;
		border: 2rpx solid #1D1B1A;
	}

	.button {
		width: 104rpx;
		height: 60rpx;
		margin-left: 592rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		flex-shrink: 0;
		z-index: 999;
	}

	.whitesearch {
		width: 104rpx;
		height: 60rpx;
		position: absolute;
	}

	.search-btn-text {
		position: absolute;
		width: 52rpx;
		height: 36rpx;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 26rpx;
		color: #000000;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.search-input {
		flex: 1;
		min-width: 0;
		height: 40rpx;
		margin-left: 62rpx;
		margin-top: 0;
		margin-right: 8rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #D5D5D5;
		text-align: left;
		font-style: normal;
		text-transform: none;
		caret-color: #D5D5D5;
		
	}

	.fairy {
		width: 32rpx;
		height: 32rpx;
	}

	.search {
		display: flex;
		align-items: center;
		background-color: black;
		position: relative;
		top: 476rpx;
		left: 0;
		width: 694rpx;
		height: 60rpx;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 30rpx 30rpx 30rpx 30rpx;
		border: 2rpx solid #FFFFFF;
		opacity: 0.5;
		overflow: hidden;
	}

	.background {
		display: block;
		object-fit: cover;
		width: 750rpx;
		height: 458rpx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.F {
		position: relative;
		width: 750rpx;
		height: 1734rpx;
		background-color: #04070C;
	}

	.fairy {
		width: 48rpx;
		height: 48rpx;
	}

	.nav-item {
		width: 48rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
	}

	.fixed {
		background-image: url("/static/black1.png");
		background-size: 100% 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 676rpx;
		height: 108rpx;
		position: fixed;
		bottom: 68rpx;
		left: 36rpx;
		padding: 0 82rpx 0 92rpx;
		box-sizing: border-box;
		z-index: 999;
	}
</style>