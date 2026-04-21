<template>
	<view class="box">
		<!-- 背景 -->
		<image class="bgc" src="/static/bg.png" mode="widthFix"></image>
		<image src="/static/lg.png" class="logo"></image>
		<view class="content">
			<button @click="goIndex" class="button">
				<image class="icon" src="/static/wechat.png"> </image> 微信一键登录
			</button>
		</view>
		<view class="law">
			<image class="img" :src="img" @click="changeP"></image>
			<text class="text">我已阅读并同意 <text @click="law">《用户服务协议》《隐私政策》</text>等</text>

		</view>



	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const img = ref('/static/o.png')
	const changeP = () => {
		img.value = img.value === '/static/o.png' ? '/static/group.png' : '/static/o.png'

	}

	const goIndex = () => {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
</script>

<style scoped>
	.law {

		left: 0;
		width: 750rpx;
		height: 36rpx;
		bottom: 144rpx;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.law .img {
		width: 20rpx;
		height: 20rpx;
	}

	.law .text {
		line-height: 36rpx;
		color: aliceblue;
		font-size: 20rpx
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box {
		width: 750rpx;
		height: 1624rpx;
		position: relative;
		overflow: hidden;
	}

	.bgc {
		width: 750rpx;
		height: 1624rpx;
		display: block;
		object-fit: cover;
	}

	.icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 20rpx;

	}

	.logo {
		position: absolute;
		width: 216rpx;
		height: 216rpx;
		top: 200rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.content {
		position: absolute;
		width: 638rpx;
		height: 88rpx;
		top: 826rpx;
		left: 56rpx;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>