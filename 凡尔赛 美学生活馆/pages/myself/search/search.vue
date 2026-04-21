<template>
	<view class="survey-F">
		<view class="survey-navigate">
			<image @click="goBack" class="survey-navigate-fairy" src="/static/left.png" mode=""></image>
			<text class="survey-navigate-text">美睫调查问卷</text>
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
		<text class="search-question1">1.是否第一次嫁接睫毛？</text>
		<view class="search-item1-box" @click="change1(1)" :class="{ active: q1 === 1 }">
			<text class="search-text-inner">A：是</text>
		</view>
		<view class="search-item2-box" @click="change1(2)" :class="{ active: q1 === 2 }">
			<text class="search-text-inner">A：否</text>
		</view>
		<text class="search-question2">2.眼睛及眼部周围是否有过敏？</text>
		<view class="search-item3-box" @click="change2(1)" :class="{ active: q2 === 1 }">
			<text class="search-text-inner">A：是（化妆品/假睫毛胶水/酒精/胶带/其他)</text>
		</view>
		<view class="search-item4-box" @click="change2(2)" :class="{ active: q2 === 2 }">
			<text class="search-text-inner">A：否</text>
		</view>
		<text class="search-question3">3.平时是否佩戴眼镜？</text>
		<view class="search-item5-box" @click="change3(1)" :class="{ active: q3 === 1 }">
			<text class="search-text-inner">A：是</text>
		</view>
		<view class="search-item6-box" @click="change3(2)" :class="{ active: q3 === 2 }">
			<text class="search-text-inner">A：否</text>
		</view>
		<text class="search-question4">4.日常是否有化妆习惯及使用卸妆油？</text>
		<view class="search-item7-box" @click="change4(1)" :class="{ active: q4 === 1 }">
			<text class="search-text-inner">A：是</text>
		</view>
		<view class="search-item8-box" @click="change4(2)" :class="{ active: q4 === 2 }">
			<text class="search-text-inner">A：否</text>
		</view>
		<text class="search-question5">5.对原生睫毛脱落和嫁接后保持时间是否有了解？</text>
		<view class="search-item9-box" @click="change5(1)" :class="{ active: q5 === 1 }">
			<text class="search-text-inner">A：是</text>
		</view>
		<view class="search-item0-box" @click="change5(2)" :class="{ active: q5 === 2 }">
			<text class="search-text-inner">A：否</text>
		</view>



		<view class="next-box" @click="skipLashoption">
			<text class="next-text">下一步</text>

		</view>
	</view>
</template>

<script setup>
	import {
		surveyData
	} from "@/utils/surveyData.js"
	import {
		ref
	} from "vue"
	const q1 = ref(0)
	const change1 = (num) => {
		q1.value = num
	}
	const q2 = ref(0)
	const change2 = (num) => {
		q2.value = num
	}
	const q3 = ref(0)
	const change3 = (num) => {
		q3.value = num
	}
	const q4 = ref(0)
	const change4 = (num) => {
		q4.value = num
	}
	const q5 = ref(0)
	const change5 = (num) => {
		q5.value = num
	}
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	const skipLashoption = () => {
		if (
			!q1.value ||
			!q2.value ||
			!q3.value ||
			!q4.value ||
			!q5.value
		) {
			// 如果有任何一题没选 → 弹出提示
			uni.showToast({
				title: "请完成所有题目", // 提示文字
				icon: "none" // 不显示图标
			})

			// 终止代码，不往下执行（不跳转、不保存）
			return
		}
		// ======================
		// 核心：保存到公共JS文件
		// ======================
		surveyData.answers.q1 = q1.value
		surveyData.answers.q2 = q2.value
		surveyData.answers.q3 = q3.value
		surveyData.answers.q4 = q4.value
		surveyData.answers.q5 = q5.value

		console.log("已保存到公共仓库：", surveyData)


		uni.navigateTo({
			url: '/pages/myself/search/lashOption/lashOption'
		})
	}
</script>

<style>
	/* 🔥 加高权重写法！能强制覆盖所有10个盒子 */
	.search-item1-box.active,
	.search-item2-box.active,
	.search-item3-box.active,
	.search-item4-box.active,
	.search-item5-box.active,
	.search-item6-box.active,
	.search-item7-box.active,
	.search-item8-box.active,
	.search-item9-box.active,
	.search-item0-box.active {
		background-color: #463927 !important;
		outline: 2px solid #ffffff !important;
		/* 👈 用这个，不会缩小 */
		outline-offset: 0px;
	}

	.search-item0-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 2016rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item9-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 1878rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item8-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 1644rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item7-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 1506rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item6-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 1272rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item5-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 1134rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item4-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 900rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item3-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 762rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item2-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 528rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-item1-box {
		display: flex;
		padding-left: 20rpx;
		align-items: center;
		position: absolute;
		top: 390rpx;
		left: 36rpx;
		width: 678rpx;
		height: 110rpx;
		border-radius: 8rpx;
		background-color: #131417;
	}

	.search-text-inner {
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 28rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.search-question5 {
		position: absolute;
		top: 1802rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.search-question4 {
		position: absolute;
		top: 1430rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.search-question3 {
		position: absolute;
		top: 1058rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.search-question2 {
		position: absolute;
		top: 686rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.search-question1 {
		position: absolute;
		top: 314rpx;
		left: 36rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 500;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: left;
		font-style: normal;
		text-transform: none;
	}

	.next-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 30rpx;
		color: #333333;
		text-align: center;
		font-style: normal;
		text-transform: none;
	}

	.next-box {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 2214rpx;
		left: 22rpx;
		width: 702rpx;
		height: 96rpx;
		background: #FFFFFF;
		border-radius: 110rpx 110rpx 110rpx 110rpx;
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
		background: #4F5154;
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

	.survey-navigate {
		display: flex;
		align-items: center;
		position: absolute;
		top: 108rpx;
		left: 0;
		width: 750rpx;
		height: 48rpx;
	}

	.survey-navigate-text {
		font-family: PingFang SC, PingFang SC;
		font-weight: bold;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		font-style: normal;
		text-transform: none;
		margin-left: 204rpx;
	}

	.survey-navigate-fairy {
		width: 48rpx;
		height: 48rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		margin-left: 28rpx;
	}

	.survey-F {
		width: 750rpx;
		height: 2402rpx;
		background: #04070C;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		position: relative;
	}
</style>