<template>
	<view class="feedback-history-F">
		<view class="history-navugate">
			<image @click="goBack" class="history-fairy" src="/static/left.png" mode=""></image>
			<text class="history-text">历史反馈</text>
		</view>
		
		<view v-if="feedbackList.length === 0" class="empty">
			<text class="empty-text">暂无历史反馈</text>
		</view>
		
		<view v-else class="feedback-list">
			<view v-for="(item, index) in feedbackList" :key="index" class="feedback-item">
				<text class="feedback-title">{{ item.content.substring(0, 20) }}{{ item.content.length > 20 ? '...' : '' }}</text>
				<text class="feedback-content">{{ item.content }}</text>
				<text class="feedback-time">{{ formatDate(item.create_time) }}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const feedbackList = ref([])

const goBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

const formatDate = (dateString) => {
	const date = new Date(dateString)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	return `${year}.${month}.${day}`
}

const getFeedbackHistory = () => {
	// 从本地存储读取历史反馈
	const feedbackHistory = uni.getStorageSync('feedbackHistory') || []
	feedbackList.value = feedbackHistory
}

onMounted(() => {
	getFeedbackHistory()
})
</script>
<style>
	.feedback-list {
		position: absolute;
		top: 120rpx;
		left: 0;
		width: 100%;
		padding: 0 28rpx;
		box-sizing: border-box;
	}
	
	.feedback-item {
		position: relative;
		margin-bottom: 20rpx;
		width: 694rpx;
		min-height: 172rpx;
		background: #131417;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;
		flex-direction: column;
		padding: 28rpx 24rpx;
		box-sizing: border-box;
	}
	
	.feedback-title {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-bottom: 8rpx;
	}
	
	.feedback-content {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: rgba(255,255,255,0.6);
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-bottom: 8rpx;
		word-break: break-all;
	}
	
	.feedback-time {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 24rpx;
		color: #AAAAAA;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}
	
	.history-text {
		margin-left: 236rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}
	
	.history-fairy {
		margin-left: 28rpx;
		width: 48rpx;
		height: 48rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
	
	.history-navugate {
		display: flex;
		align-items: center;
		width: 750rpx;
		height: 96rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
	
	.feedback-history-F {
		position: relative;
		width: 750rpx;
		min-height: 1624rpx;
		background: #04070C;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}

	.empty {
		position: absolute;
		top: 200rpx;
		left: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.empty-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.6);
		text-align: center;
		font-style: normal;
		text-transform: none;
	}
</style>
