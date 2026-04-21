<template>
	<view class="fixed">
		<image @click="switchTab(1)" class="fairy" :src="active===1?'/static/whitehome.png':'/static/blackhome.png'">
		</image>
		<image @click="switchTab(2)" class="fairy"
			:src="active===2?'/static/whiteprogram.png':'/static/blackprogram.png' "></image>
		<image @click="switchTab(3)" class="fairy" :src="active===3?'/static/whiteme.png':'/static/blackme.png' ">
		</image>
	</view>
	<view class="myself-F">
		<image class="myself-background" src="/static/black.png" mode="widthFix"></image>
		<view class="myself-background-top">
			<view class="myself-background-top-flex">
				<image class="myself-background-avatar" src="/static/lg.png" mode=""></image>
				<text class="myself-background-top-text">Kiki</text>
			</view>
		</view>
		<view class="myslef-background-choose">

			<view class="feedback" @click="skipFeedback">
				<view class="feedback-box">
					<image class="feedback-fairy" src="/static/fairy-1.png" mode=""></image>
					<text class="feedback-text">意见反馈</text>
					<image class="feedback-Right" src="/static/Right.png" mode=""></image>
				</view>
			</view>

			<view class="record">
				<view class="record-box" @click="skipSearch">
					<image class="record-fairy" src="/static/fairy-2.png" mode=""></image>
					<text class="record-text">问卷记录</text>
					<image class="record-Right" src="/static/Right.png" mode=""></image>
				</view>
			</view>

			<view class="about">
				<view class="about-box">
					<image class="about-fairy" src="/static/fairy-3.png" mode=""></image>
					<text class="about-text">关于我们</text>
					<image class="about-Right" src="/static/Right.png" mode=""></image>
				</view>
			</view>
			<view class="privacy">
				<view class="privacy-box">
					<image class="privacy-fairy" src="/static/fairy-4.png" mode=""></image>
					<text class="privacy-text">隐私政策</text>
					<image class="privacy-Right" src="/static/Right.png" mode=""></image>
				</view>
			</view>



		</view>



	</view>
</template>

<script setup>
	const skipSearch = () => {
		uni.navigateTo({
			url: '/pages/myself/search/search'
		})
	}
	const skipFeedback = () => {
		uni.navigateTo({
			url: '/pages/myself/feedback/feedback'
		})
	}
	import {
		ref
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app';

	const active = ref(3);
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
		active.value = routeActiveMap[`/${route}`] || 3;
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
	.privacy-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0rpx 20rpx 0 24rpx;
	}

	.privacy-Right {
		width: 32rpx;
		height: 32rpx;


	}

	.privacy-text {
		margin-left: -400rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.privacy-fairy {
		width: 68rpx;
		height: 68rpx;
	}

	.about-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0rpx 20rpx 0 24rpx;
	}

	.about-Right {
		width: 32rpx;
		height: 32rpx;


	}

	.about-text {
		margin-left: -400rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.about-fairy {
		width: 68rpx;
		height: 68rpx;
	}

	.record-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0rpx 20rpx 0 24rpx;
	}

	.record-Right {
		width: 32rpx;
		height: 32rpx;


	}

	.record-text {
		margin-left: -400rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.record-fairy {
		width: 68rpx;
		height: 68rpx;
	}

	.feedback-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0rpx 20rpx 0 24rpx;
	}

	.feedback-Right {
		width: 32rpx;
		height: 32rpx;


	}

	.feedback-text {
		margin-left: -400rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.feedback-fairy {
		width: 68rpx;
		height: 68rpx;
	}

	.privacy {
		margin-bottom: 24rpx;
		width: 694rpx;
		height: 116rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		background-color: #131417;
	}

	.about {
		width: 694rpx;
		height: 116rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		background-color: #131417;
	}

	.record {
		width: 694rpx;
		height: 116rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		background-color: #131417;
	}

	.feedback {
		margin-top: 24rpx;
		width: 694rpx;
		height: 116rpx;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		background-color: #131417;
	}

	.myslef-background-choose {
		position: absolute;
		top: 584rpx;
		left: 28rpx;
		width: 694rpx;
		height: 572rpx;
		background: rgba(81, 72, 65, 0.2);
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;
		flex-direction: column;
		gap: 20rpx;
	}

	.myself-background-top-flex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.myself-background-top-text {
		width: 56rpx;
		height: 44rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.myself-background-avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
	}

	.myself-background-top {
		background-color: #131417;
		position: absolute;
		top: 216rpx;
		left: 28rpx;
		width: 694rpx;
		height: 340rpx;
	}

	.myself-background {
		width: 750rpx;
		height: 1624rpx;
	}

	.myself-F {
		position: relative;
		width: 750rpx;
		height: 1624rpx;
	}

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
</style>