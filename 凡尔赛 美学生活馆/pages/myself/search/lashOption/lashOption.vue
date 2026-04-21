<template>
	<view class="basic-information-F">
		<view class="navigate-box" @click="goBack">
			<image class="navigate-fairy" src="/static/left.png" mode=""></image>
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
		<view class="basic-item">
			<view class="basic-item-tag"></view>
			<text class="basic-item-text">美睫师设计内容</text>
		</view>
		<image class="lash-image" src="/static/search-image.png" mode=""></image>
		<view class="basic-item1">
			<view class="basic-item1-tag"></view>
			<text class="basic-item1-text">美睫调查问卷</text>
		</view>
		<text class="lash-question1-text">睫毛卷度</text>
		<view class="lash-line1">
			<view class="lash-item" @click="selectLash('J')" :class="{active: activeLash == 'J'}">
				<view class="lash-line-inner">
				</view>
				<text class="lash-text">J</text>
			</view>
			<view class="lash-item" @click="selectLash('B')" :class="{active: activeLash == 'B'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">B</text>
			</view>
			<view class="lash-item" @click="selectLash('C')" :class="{active: activeLash == 'C'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">C</text>
			</view>
			<view class="lash-item" @click="selectLash('D')" :class="{active: activeLash == 'D'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">D</text>
			</view>
		</view>
		<view class="lash-line2">
			<view class="lash-item" @click="selectLash('LJ')" :class="{active: activeLash == 'LJ'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">LJ</text>
			</view>
			<view class="lash-item" @click="selectLash('LB')" :class="{active: activeLash == 'LB'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">LB</text>
			</view>
			<view class="lash-item" @click="selectLash('LC')" :class="{active: activeLash == 'LC'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">LC</text>
			</view>
			<view class="lash-item" @click="selectLash('LD')" :class="{active: activeLash == 'LD'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">LD</text>
			</view>
		</view>
		<view class="lash-line3">
			<view class="lash-item" @click="selectLash('婴儿弯')" :class="{active: activeLash == '婴儿弯'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">婴儿弯</text>
			</view>
			<view class="lash-item" @click="selectLash('婴儿直')" :class="{active: activeLash == '婴儿直'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">婴儿直</text>
			</view>
			<view class="lash-item" @click="selectLash('CC')" :class="{active: activeLash == 'CC'}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">CC</text>
			</view>
		</view>


		<text class="lash-question1-text1">睫毛长度</text>


		<view class="lash-line4">
			<view class="lash-item" @click="selectLash1(8)" :class="{active: activeLash1 == 8}">
				<view class="lash-line-inner">
				</view>
				<text class="lash-text">8</text>
			</view>
			<view class="lash-item" @click="selectLash1(9)" :class="{active: activeLash1 == 9}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">9</text>
			</view>
			<view class="lash-item" @click="selectLash1(10)" :class="{active: activeLash1 == 10}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">10</text>
			</view>
			<view class="lash-item" @click="selectLash1(11)" :class="{active: activeLash1 == 11}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">11</text>
			</view>
		</view>
		<view class="lash-line5">
			<view class="lash-item" @click="selectLash1(12)" :class="{active: activeLash1 == 12}">
				<view class="lash-line-inner">
				</view>
				<text class="lash-text">12</text>
			</view>
			<view class="lash-item" @click="selectLash1(13)" :class="{active: activeLash1 == 13}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">13</text>
			</view>
			<view class="lash-item" @click="selectLash1(14)" :class="{active: activeLash1 == 14}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">14</text>
			</view>
			<view class="lash-item" @click="selectLash1(15)" :class="{active: activeLash1 ==15}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">15</text>
			</view>
		</view>
		<view class="lash-line6">
			<view class="lash-item" @click="selectLash1(16)" :class="{active: activeLash1 == 16}">
				<view class="lash-line-inner">
				</view>
				<text class="lash-text">16</text>
			</view>
			<view class="lash-item" @click="selectLash1(17)" :class="{active: activeLash1 == 17}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">17</text>
			</view>
			<view class="lash-item" @click="selectLash1(18)" :class="{active: activeLash1 == 18}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">18</text>
			</view>
			<view class="lash-item" @click="selectLash1(19)" :class="{active: activeLash1 == 19}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">19</text>
			</view>
		</view>
		<view class="lash-line7">
			<view class="lash-item" @click="selectLash1(20)" :class="{active: activeLash1 == 20}">
				<view class="lash-line-inner">
				</view>
				<text class="lash-text">20</text>
			</view>

		</view>

<text class="lash-question1-text2">下睫毛长度</text>
<view class="lash-line8">
			<view class="lash-item" @click="selectLash2(6)" :class="{active: activeLash2 == 6}">
				<view class="lash-line-inner">
				</view>
				<text class="lash-text">6</text>
			</view>
			<view class="lash-item" @click="selectLash2(7)" :class="{active: activeLash2 == 7}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">7</text>
			</view>
			<view class="lash-item" @click="selectLash2(8)" :class="{active: activeLash2 == 8}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">8</text>
			</view>
			<view class="lash-item" @click="selectLash2(9)" :class="{active: activeLash2 == 9}">
				<view class="lash-line-inner"></view>
				<text class="lash-text">9</text>
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
	import {ref} from 'vue'
	import { surveyData } from '@/utils/surveyData.js'

	 

	const activeLash2 = ref(0)
	const selectLash2 = (num) => {
		activeLash2.value = num
	}
	const activeLash1 = ref(0)
	const selectLash1 = (num) => {
		activeLash1.value = num
	}
	const activeLash = ref('')
	const selectLash = (num) => {
		activeLash.value = num
	}
	const goNext = () => {
		// 简单校验
		if (!activeLash.value || !activeLash1.value || !activeLash2.value) {
		  uni.showToast({
		    title: '请完成所有选项',
		    icon: 'none'
		  })
		  return
		}
			
		// ============= 核心保存 =============
		surveyData.answers.q6 = activeLash.value      // 卷度
		surveyData.answers.q7 = activeLash1.value     // 长度
		surveyData.answers.q8 = activeLash2.value     // 下睫毛
		
		console.log('第二页保存成功：', surveyData)

		uni.navigateTo({
			url: '/pages/myself/search/basicInformation/basicInformation'
		})
	}
	const goBack = () => {
		
		uni.navigateBack({
			delta: 1
		})
	}
	
</script>

<style>
	.lash-line8{
		position: absolute;
		top: 3186rpx;
		display: flex;
		margin-left: 36rpx;
	}
	.lash-question1-text2{
		position: absolute;
		top: 3122rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}
	.lash-line7 {
		display: flex;
		position: absolute;
		top: 2850rpx;
		left: 36rpx;
	}

	.lash-line6 {
		display: flex;
		position: absolute;
		top: 2602rpx;
		left: 36rpx;
	}

	.lash-line5 {
		display: flex;
		position: absolute;
		top: 2354rpx;
		left: 36rpx;
	}

	.lash-line4 {
		display: flex;
		position: absolute;
		top: 2106rpx;
		left: 36rpx;
	}

	.lash-question1-text1 {
		position: absolute;
		top: 2042rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.lash-item.active .lash-line-inner {
		background: #463927 !important;
		border-radius: 0 !important;
		border: 2rpx solid #E7AD6A !important;
	}

	.lash-image {
		width: 170rpx;
		height: 170rpx;
		background: #463927;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		border: 2rpx solid #E7AD6A;
		flex-shrink: 0;
	}

	.lash-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.lash-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 12rpx;
	}

	.lash-line-inner {
		width: 170rpx;
		height: 170rpx;
		background: #131417;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		border: 2rpx solid #2D2E32;
	}

	.lash-line3 {
		display: flex;
		/* flex-direction: column; */
		position: absolute;
		left: 36rpx;
		top: 1770rpx;
		height: 224rpx;
		width: 680rpx;
		/* background-color: #00ffff; */
	}

	.lash-line2 {
		display: flex;
		/* flex-direction: column; */
		position: absolute;
		left: 36rpx;
		top: 1522rpx;
		height: 224rpx;
		width: 680rpx;
		/* 	background-color: #00ffff; */
	}

	.lash-line1 {
		display: flex;
		/* flex-direction: column; */
		position: absolute;
		left: 36rpx;
		top: 1274rpx;
		height: 224rpx;
		width: 680rpx;
		/* 	background-color: #00ffff; */
	}

	.lash-question1-text {
		position: absolute;
		top: 1210rpx;
		left: 36rpx;
		width: 112rpx;
		height: 40rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.basic-item1-text {
		margin-left: 12rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.basic-item1-tag {
		margin-left: 36rpx;
		width: 6rpx;
		height: 28rpx;
		background: #E7AD6A;
		border-radius: 3rpx 3rpx 3rpx 3rpx;
	}

	.basic-item1 {
		position: absolute;
		top: 1134rpx;
		width: 750rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
	}

	.lash-image {
		position: absolute;
		top: 390rpx;
		left: 36rpx;
		width: 678rpx;
		height: 672rpx;
		border: 1rpx dashed #747474;
	}

	.basic-item-text {
		margin-left: 12rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.basic-item-tag {
		margin-left: 36rpx;
		width: 6rpx;
		height: 28rpx;
		background: #E7AD6A;
		border-radius: 3rpx 3rpx 3rpx 3rpx;
	}

	.basic-item {
		position: absolute;
		top: 314rpx;
		width: 750rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
	}

	.progress2 .progress-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #333333;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.progress1 .progress-text {
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
		color: rgba(255, 255, 255, 0.8);
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
		background: #4F5154;
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
		top: 3544rpx;
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
		display: flex;
		align-items: center;
		top: 108rpx;
		left: 0;
		position: absolute;
		width: 750rpx;
		height: 48rpx;
		background-color: #04070C;
	}

	.basic-information-F {
		position: relative;
		width: 750rpx;
		height: 3732rpx;
		background: #04070C;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
	}
</style>