<template>
	<view class="basic-information-F">
		<view class="navigate-box">
			<image @click="goBack" class="navigate-fairy" src="/static/left.png" mode=""></image>
			<text class="navigate-text">美睫调查问卷</text>

		</view>
		<view class="progress">
			<view class="progress1">
				<text class="progress-text">调查问卷</text>
			</view>
			<view class="progress2">
				<text class="progress-text">睫毛设计选择</text>
			</view>
			<view class="progress3">
				<text class="progress-text">基本资料</text>
			</view>
		</view>

		<text class="name">姓名</text>
		<view class="name-input-box">
			<input v-model="name" class="name-input" type="text" placeholder="请填写姓名" />
		</view>
		<text class="phone">电话</text>
		<view class="phone-box">
			<input v-model="phone" class="phone-input" type="text" maxlength="11" placeholder="请填写电话" />

		</view>
		<text class="way">来店途径</text>
		<view class="way-box">
			<view class="way-1" @click="change(1)" :class="{active:umber===1}">
				<text class="way-text">A：网络</text>
			</view>
			<view class="way-2" @click="change(2)" :class="{active:umber===2}">
				<text class="way-text">B：介绍</text>
			</view>
			<view class="way-3" @click="change(3)" :class="{active:umber===3}">
				<text class="way-text">C：其他</text>
			</view>
		</view>





		<view class="step-action">
			<view class="step-action-back" @click="goBack">
				<text class="step-action-text">上一步</text>
			</view>
			<view class="step-action-next" @click="goNext">
				<text class="step-action-text">下一步</text>
			</view>

		</view>
	</view>
</template>

<script setup>
	const that = this 
	import {
		ref
	} from 'vue'
	import {
		surveyData
	} from '@/utils/surveyData.js'
	const name = ref('')
	const phone = ref('')
	const umber = ref(0)
	const change = (num) => {
		umber.value = num
	}
	const goNext = () => {
		// 更新用户答案
		surveyData.answers.q9 = name.value
		surveyData.answers.q10 = phone.value
		surveyData.answers.q11 = umber.value

		// 准备提交数据（符合后端格式）
		const submitData = {
			data: surveyData.data,
			questions: surveyData.questions,
			answers: surveyData.answers
		}

		// 打印完整问卷（能看到所有页数据）
		console.log('提交数据:', submitData)
		
		// 调用API提交数据
		uni.request({
			url: "https://api.fanersaimeijia.com//api/index/questionnaire",
			method: "POST",
			data: submitData,
			header: {
				"Content-Type": "application/json",
				"token": "9d95cee9-b87a-47f0-8fc5-cba1ab26bd56"
			},
			success: (res) => {
				// 判断后端是否真的成功
				if (res.data.code === 1) {
					uni.showToast({ title: "提交成功" })
					uni.navigateTo({
						url: "/pages/myself/search/agreement/agreement"
					})
				} else {
					uni.showToast({
						title: res.data.msg || "提交失败",
						icon: "none"
					})
				}
			},
			fail: (err) => {
				uni.showToast({ title: "网络异常", icon: "error" })
			}
		})
	}

	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style>
	.way-1.active,
	.way-2.active,
	.way-3.active {
		background-color: #463927;
		outline: 2rpx solid #E7AD6A;
	}

	.way-3 {
		position: absolute;
		top: 1134rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		background-color: #131417;
		display: flex;
		align-items: center;

	}

	.way-2 {
		position: absolute;
		top: 996rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		background-color: #131417;
		display: flex;
		align-items: center;

	}

	.way-1 {
		position: absolute;
		top: 858rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		background-color: #131417;
		display: flex;
		align-items: center;

	}

	.way-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-left: 20rpx;
	}

	.way {
		position: absolute;
		left: 36rpx;
		top: 782rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.phone-input {
		margin-left: 20rpx;
		width: 600rpx;
		color: #FFFFFF;
		caret-color: aliceblue;
	}

	.phone-box {
		position: absolute;
		left: 36rpx;
		top: 624rpx;
		width: 678rpx;
		height: 110rpx;
		border: 2rpx dashed #4d515d;
		display: flex;
		align-items: center;
	}

	.phone {
		position: absolute;
		left: 36rpx;
		top: 548rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.name-input-box {
		position: absolute;
		left: 36rpx;
		top: 390rpx;
		width: 678rpx;
		height: 110rpx;
		border: 2rpx dashed #4d515d;
		display: flex;
		align-items: center;
	}

	.name-input {
		margin-left: 20rpx;
		width: 600rpx;
		color: #FFFFFF;
		caret-color: aliceblue;

	}

	.name {
		position: absolute;
		left: 36rpx;
		top: 314rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.progress3 .progress-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.progress-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.progress3 {
		margin-left: 6rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 246rpx;
		height: 64rpx;
		background: #FFFFFF;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}

	.progress2 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 6rpx;
		width: 246rpx;
		height: 64rpx;
		background: #FFFFFF;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}

	.progress1 {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 246rpx;
		height: 64rpx;
		background: #FFFFFF;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}

	.progress {
		position: absolute;
		top: 194rpx;
		left: 0;
		display: flex;
	}

	.step-action-next {
		margin-left: 46rpx;
		width: 316rpx;
		height: 96rpx;
		background: #FFFFFF;
		border-radius: 48rpx 48rpx 48rpx 48rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.step-action-back {
		margin-left: 36rpx;
		width: 316rpx;
		height: 96rpx;
		background: #FFFFFF;
		border-radius: 48rpx 48rpx 48rpx 48rpx;
		opacity: 0.6;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.step-action {
		display: flex;
		left: 0;
		top: 1436rpx;
		position: absolute;
		width: 750rpx;
		height: 96rpx;
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

	.basic-information-F {
		position: relative;
		width: 750rpx;
		height: 1624rpx;
		background: #04070C;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
</style>