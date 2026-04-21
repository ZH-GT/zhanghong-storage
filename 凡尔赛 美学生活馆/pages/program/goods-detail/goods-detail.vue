<template>
	<view class="detail-F">
		<image class="detail-background" src="/static/logo1.png" mode="widthFix"></image>
		<view class="navigate">
			<view class="navigate-box" @click="goBack">
				<image class="navigate-fairy" src="/static/left.png" mode=""></image>
			</view>
		</view>

		<view class="detail-text-box">
			<text class="detail-text1">蝶羽花影-章若楠同款裸妆太阳花翘睫</text>
			<text class="detail-text2">￥368</text>
		</view>
		
		<view class="choose">
			<view class="choose-box1" @click="setActive(1)">
				<text class="choose-text":class="{active:activeTab===1}">商品详情</text>
				<view class="choose-tag" v-if="activeTab===1">
					
				</view>
			</view>
			<view class="choose-box2" @click="setActive(2)">
				<text class="choose-text" :class="{active:activeTab===2}">案例介绍</text>
				<view class="choose-tag" v-if="activeTab===2"></view>
				
			</view>
		</view>

<view class="choose-background">
	<image class="choose-background-image" :src="activeTab===1?'/static/bg.png':'/static/logo.png'" mode="widthFix"></image>
	
</view>




	</view>
</template>

<script setup>
	import {ref} from 'vue';
	const activeTab=ref(1)
	const setActive=(num)=>{
		activeTab.value=num
	}
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style>
	.choose-text.active {
	  font-weight: bold;
	  color: #FFFFFF;
	}
	.choose-background-image{
		margin-top: 22rpx;
		width: 750rpx;
	    height: 100%;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
	.choose-background{
		position: absolute;
		top: 1212rpx;
		left: 0;
		width: 750rpx;
		height: 1170rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
	.choose-tag{
		width: 16rpx;
		height: 8rpx;
		background: #FFFFFF;
		border-radius: 4rpx 4rpx 4rpx 4rpx;
	}
	.choose-text{
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: rgba(255,255,255,0.6);
		text-align: left;
		font-style: normal;
		text-transform: none;
	}
	.choose-box2{
		width: 114rpx;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 88rpx;
	}
	.choose-box1{
		width: 114rpx;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 28rpx;
	}
	.choose{
		justify-content: flex-start;
		display: flex;
		top: 1134rpx;
		left: 0;
		position: absolute;
		width: 750rpx;
		height: 100rpx;
		background: #090D12;
	}
	.detail-text2 {
		margin-top: 16rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #E7AD6A;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.detail-text1 {
		margin-top: 24rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.detail-text-box {
		padding-left: 24rpx;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 954rpx;
		left: 0;
		width: 750rpx;
		height: 164rpx;
		background-color: #090D12;
	}

	.navigate-fairy {
		width: 60rpx;
		height: 60rpx;
	}

	.navigate-box {
		width: 96rpx;
		height: 96rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		
	}

	.navigate {
		position: absolute;
		top: 88rpx;
		left: 0;
		width: 750rpx;
		height: 96rpx;
		display: flex;
		justify-content: flex-start;
	}

	.detail-background {
		top: 0;
		left: 0;
		width: 750rpx;
		height: 1010rpx;
	}

	.detail-F {
		position: relative;
		width: 750rpx;
		height: 2432rpx;
		background-color: yellowgreen;
	}
</style>