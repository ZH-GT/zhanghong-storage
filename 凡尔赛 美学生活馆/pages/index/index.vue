<template>

	<view class="box-index">
		<image class="back-index" src="/static/black.png"></image>
		<image class="logo-index" src="/static/logo1.png"> </image>
		<view class="back-2">
			<image class="img" src="/static/mj.png" mode="widthFix"></image>
			<image class="img" src="/static/mj3.png" mode="widthFix"></image>
			<image class="img" src="/static/mj4.png" mode="widthFix"></image>

		</view>
		<view class="back-3">
			<image class="img" src="/static/mj2.png" mode="widthFix"></image>
			<image @click="survey" class="img" src="/static/mj1.png" mode="widthFix"></image>
		</view>

		``
		<view class="fixed">
			<image @click="switchTab(1)" class="fairy"
				:src="active===1?'/static/whitehome.png':'/static/blackhome.png'"></image>
			<image @click="switchTab(2)" class="fairy"
				:src="active===2?'/static/whiteprogram.png':'/static/blackprogram.png' "></image>
			<image @click="switchTab(3)" class="fairy" :src="active===3?'/static/whiteme.png':'/static/blackme.png' ">
			</image>



		</view>


	</view>
	<text class="text">门店信息</text>
	<view class="back-4">
		<image class="img" src="/static/lg.png" mode=""></image>
		<view class="text-1">
			<text class="text1">凡尔赛·大族广场店</text>
			<br />
			<text class="text2">09:00-21:00</text>
			<br />
			<text class="text3">北京市经济技术开发区荣华南路一号院国瑞金鼎 7号楼3008</text>

		</view>
		<view class="img-1">
			<image class="img1" src="/static/f2.png" mode=""></image>
			<image class="img1" src="/static/f3.png" mode=""></image>

		</view>
	</view>
	<text class="text-r">热门项目</text>
	<view class="back-5">
		<image class="img-r1" src="/static/lg.png"></image>
		<text class="text-r1">胶原赋活 焕亮少女肌</text>
		<view class="text-b">
			<text class="text-r2">胶原直补，焕亮褪暗，自净式修护，强韧肌底。</text>
			<view class="text-b1">
				<text class="text-r3">查看</text>
			</view>
		</view>

	</view>

	<view class="back-6">

	</view>
	<view class="back-7">


	</view>


</template>
<script setup>
	import {
		ref
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app';
    const survey=()=>{
		uni.navigateTo({
			url:'/pages/myself/search/search'
		})
	}
	const active = ref(1);
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
		active.value = routeActiveMap[`/${route}`] || 1;
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
</script>

<style>
	.fairy {
		width: 48rpx;
		height: 48rpx;
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

	.back-7 {
		border-radius: 8rpx;
		flex-direction: column;
		justify-content: space-between;
		display: flex;
		position: absolute;
		background-color: #1D1B1A;
		width: 694rpx;
		height: 382rpx;
		left: 28rpx;
		top: 2466rpx;


	}

	.back-6 {
		border-radius: 8rpx;
		flex-direction: column;
		justify-content: space-between;
		display: flex;
		position: absolute;
		background-color: #1D1B1A;
		width: 694rpx;
		height: 382rpx;
		left: 28rpx;
		top: 2062rpx;
	}

	.text-b1 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 110rpx;
		height: 48rpx;
		background: #312D2A;
		border-radius: 4rpx 4rpx 4rpx 4rpx;
		margin-right: 12rpx;
		margin-top: -18rpx;

	}

	.text-r3 {

		width: 48rpx;
		height: 34rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.text-b .text-r2 {
		margin-left: 12rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;

	}

	.text-b {
		justify-content: space-between;
		display: flex;
		width: 670rpx;
		height: 48rpx;
		padding-right: 12rpx;

	}

	.back-5 .text-r1 {
		margin-left: 12rpx;
		margin-top: 20rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.img-r1 {
		position: relative;
		margin-top: 12rpx;
		margin-left: 12rpx;
		width: 670rpx;
		height: 244rpx;
		border-radius: 4rpx;
	}

	.back-5 {
		border-radius: 8rpx;
		flex-direction: column;
		justify-content: space-between;
		display: flex;
		position: absolute;
		top: 1658rpx;
		left: 28rpx;
		width: 694rpx;
		height: 384rpx;
		background-color: #1D1B1A;

	}

	.text-r {

		position: absolute;
		left: 28rpx;
		top: 1594rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;

	}

	.img-1 {
		display: flex;
		align-items: center;
		justify-self: center;
		gap: 20rpx;
		margin-left: 22rpx;
		margin-right: 15rpx;

	}

	.img-1 .img1 {

		width: 60rpx;
		height: 60rpx;
	}

	.text-1 {
		margin-top: 20rpx;
		margin-left: 60rpx;
	}

	.text3 {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 20rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		word-break: break-all;
		white-space: normal;
		line-height: 1.4;
	}

	.text2 {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 20rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		word-break: break-all;
		white-space: normal;
		line-height: 1.4;
	}

	.text1 {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		word-break: break-all;
		white-space: normal;
		line-height: 1.4;
	}

	.back-4 {
		border-radius: 8rpx;
		background-color: #1D1B1A;
		display: flex;
		width: 694rpx;
		height: 200rpx;

		position: absolute;
		top: 1370rpx;
		margin-left: 28rpx;

	}

	.back-4 .img {
		margin-top: 20rpx;
		top: 5rpx;
		left: 16rpx;
		width: 104rpx;
		height: 104rpx;
	}

	.back-4 .text-1 {
		width: 356rpx;
		height: 132rpx;
	}

	.text {
		position: absolute;
		top: 1310rpx;
		left: 28rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.back-3 .img {
		width: 334rpx;
		height: 150rpx;
	}

	.back-3 {
		justify-content: space-evenly;
		align-items: center;
		display: flex;
		top: 1124rpx;
		left: 0;
		/* background-color: aqua; */
		position: absolute;
		width: 750rpx;
		height: 225.18rpx;


	}

	.box-index {
		position: relative;
		overflow: hidden;
		width: 750rpx;
		height: 3078rpx;
	}

	.back-index {
		width: 750rpx;
		height: 3078rpx;
	}

	.logo-index {
		width: 750rpx;
		height: 1028rpx;
		position: absolute;
		top: 0;
		left: 0;

	}

	.back-2 {
		position: absolute;
		width: 750rpx;
		height: 214rpx;
		top: 886rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.back-2 .img {
		width: 214rpx;
		height: 214rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
	}
</style>