<template>
	<view class="agreement-F">
		<view class="navigate-box">
			<image @click="goBack" class="navigate-fairy" src="/static/left.png" mode=""></image>
			<text class="navigate-text">美睫调查问卷</text>
		</view>
		<view class="content">
			<text class="content-title">嫁接同意书</text>
			<text class="content-text">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</text>
		</view>
		<view class="consent-box">
			<image @click="changePicture" class="consent-fairy" :src="imgUrl" mode=""></image>
			<view class="consent-text-box">
				<text class="consent-text">本人确认:已充分了解服务内容及可能风险，同意操作中若因个人原因或不可控因素终止服务，接受免费卸除处理，并自愿放弃退款要求</text>
			</view>
		</view>


		<view class="agreement-submit">
			<text class="agreement-text">提交美睫调查问卷</text>
		</view>
	</view>
</template>

<script setup>
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	import {
		ref
	} from "vue"
	const imgUrl = ref('/static/o.png')
	const changePicture = () => {
		if (imgUrl.value === '/static/o.png') {
			imgUrl.value = '/static/group.png'
		} else {
			imgUrl.value = '/static/o.png'
		}

	}
</script>

<style>
	.consent-text-box {
		margin-left: 10rpx;
		width: 640rpx;
		height: 102rpx;
	}

	.consent-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.6);
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.consent-fairy {
		margin-top: 12rpx;
		margin-left: 36rpx;
		width: 28rpx;
		height: 28rpx;
		border-radius: 8rpx;
	}

	.consent-box {
		display: flex;
		position: absolute;
		top: 1272rpx;
		left: 0;
		width: 750rpx;
		height: 102rpx;
	}

	.content-text {
		margin-top: 22rpx;
		margin-left: 28rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.8);
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.content-title {
		margin-top: 24rpx;
		;
		margin-left: 264rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.content {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 194rpx;
		left: 36rpx;
		width: 678rpx;
		height: 1032rpx;
		background-color: #131417;
		border: 2rpx dashed rgba(255, 255, 255, 0.3);
	}

	.agreement-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 30rpx;
		color: #333333;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.agreement-submit {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 1436rpx;
		left: 22rpx;
		width: 702rpx;
		height: 96rpx;
		background: #FFFFFF;
		border-radius: 110rpx 110rpx 110rpx 110rpx;
	}

	.navigate-text {
		margin-left: 204rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.navigate-fairy {
		margin-left: 28rpx;
		width: 48rpx;
		height: 48rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}

	.navigate-box {
		position: absolute;
		top: 108rpx;
		left: 0;
		align-items: center;
		display: flex;
		width: 750rpx;
		height: 48rpx;
	}

	.agreement-F {
		position: relative;
		width: 750rpx;
		height: 1624rpx;
		background: #04070C;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
</style>