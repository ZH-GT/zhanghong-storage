<template>
	<view class="feedback-F">
		<view class="navigate">
			<image @click="goBack" class="navigate-fairy" src="/static/left.png" mode=""></image>
			<text class="navigate-text">意见反馈</text>
		</view>
		<view class="history-feedback" @click="skipHistory">
			<text class="history-text">历史反馈</text>
			<image class="history-fairy" src="/static/Right.png" mode=""></image>
		</view>
		<view class="feedback-content">
			<textarea v-model="content" class="feedback-input" placeholder="请详细描述您的意见反馈" />
			<view class="image-container">
				<image class="feedback-content-fairy" src="/static/fairy-5.png" mode="" @click="chooseImage"></image>
				<view class="selected-images">
					<view v-for="(src, index) in imageSrc" :key="index" class="selected-image-item">
						<image :src="src" mode="aspectFill" class="selected-image"></image>
						<view class="close-icon" @click="removeImage(index)">×</view>
					</view>
				</view>
			</view>


		</view>

		<view class="submit" @click="submitFeedback">
			<text class="submit-text">提交</text>

		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { uploadFile } from '@/utils/config'

const content = ref('')
const imageSrc = ref([])

const skipHistory = () => {
	uni.navigateTo({
		url: '/pages/myself/feedback/feedback-history/feedback-history'
	})
}

const goBack = () => {
	uni.navigateBack({
		delta: 1
	})
}

const chooseImage = () => {
	if (imageSrc.value.length >= 3) {
		uni.showToast({
			title: '最多只能选择3张图片',
			icon: 'none'
		})
		return
	}
	uni.chooseImage({
		count: 3 - imageSrc.value.length,
		sizeType: ['original', 'compressed'],
		sourceType: ['album', 'camera'],
		success: (res) => {
			imageSrc.value = [...imageSrc.value, ...res.tempFilePaths]
		}
	})
}

const removeImage = (index) => {
	imageSrc.value.splice(index, 1)
}

const submitFeedback = () => {
	if (!content.value) {
		uni.showToast({
			title: '请输入反馈内容',
			icon: 'none'
		})
		return
	}
	
	const imageData = imageSrc.value.join(',')
	const submitData = {
		feedback_id: '1',
		user_id: '',
		content: content.value,
		image: imageData,
		mobile: '',
		status: 1,
		remark: null,
		create_time: new Date().toISOString(),
		remark_time: null,
		new_image: imageData,
		status_text: ''
	}
	
	uploadFile('api/user/feedbackDetail', imageSrc.value[0] || '', 'image', submitData, (result) => {
		if (result.code === 1) {
			uni.showToast({
				title: '提交成功',
				icon: 'success'
			})
			
			// 保存到本地存储，用于历史反馈
			const feedbackHistory = uni.getStorageSync('feedbackHistory') || []
			feedbackHistory.unshift(submitData) // 新反馈添加到开头
			uni.setStorageSync('feedbackHistory', feedbackHistory)
			
			content.value = ''
			imageSrc.value = []
		} else {
			uni.showToast({
				title: result.msg || '提交失败',
				icon: 'none'
			})
		}
	})
}
</script>

<style>
	.submit-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 30rpx;
		color: #333333;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.submit {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 1436rpx;
		left: 22rpx;
		width: 702rpx;
		height: 96rpx;
		background: #FFFFFF;
		border-radius: 50rpx 50rpx 50rpx 50rpx;
	}

	.feedback-input {
		width: 646rpx;
		height: 540rpx;
		margin: 28rpx;
		color: #FFFFFF;
		caret-color: #FFFFFF;
		background-color: transparent;
	}

	.image-container {
		display: flex;
		align-items: center;
		margin: 0 28rpx 28rpx 28rpx;
	}

	.feedback-content-fairy {
		width: 144rpx;
		height: 144rpx;
	}

	.selected-images {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		flex-wrap: wrap;
	}

	.selected-image-item {
		position: relative;
		width: 144rpx;
		height: 144rpx;
		margin-left: 16rpx;
	}

	.selected-image {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
	}

	.close-icon {
		position: absolute;
		top: -8rpx;
		right: -8rpx;
		width: 40rpx;
		height: 40rpx;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		color: #FFFFFF;
		line-height: 1;
		z-index: 1;
	}

	.feedback-content {
		position: absolute;
		top: 308rpx;
		left: 22rpx;
		width: 702rpx;
		height: 872rpx;
		background: #131417;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;
		flex-direction: column;

	}

	.history-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-left: 24rpx;
	}

	.history-fairy {
		margin-left: 498rpx;
		width: 32rpx;
		height: 32rpx;
	}

	.history-feedback {
		top: 200rpx;
		left: 28rpx;
		position: absolute;
		width: 694rpx;
		height: 88rpx;
		background: #131417;
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		display: flex;
		align-items: center;
	}

	.navigate-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
		margin-left: 236rpx;
	}

	.navigate-fairy {
		width: 48rpx;
		height: 48rpx;
		margin-left: 28rpx;
	}

	.navigate {
		top: 88rpx;
		left: 0;
		position: absolute;
		width: 750rpx;
		height: 96rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		background-color: #04070C;
		display: flex;
		align-items: center;
	}

	.feedback-F {
		width: 750rpx;
		height: 1624rpx;
		background: #04070C;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
</style>