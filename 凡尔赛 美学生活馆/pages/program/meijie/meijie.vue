<template>
	<scroll-view class="scroll-wrapper" scroll-x enable-flex enhanced :show-scrollbar="false">
		<view class="parent">
			<view class="child" v-for="(item, index) in list" :key="index" :class="{ active: currentIndex === index }"
				@click="currentIndex = index">
				{{ item }}
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	const currentIndex = ref(0)
</script>

<style scoped>
	.scroll-wrapper {
		white-space: nowrap;
	}

	.scroll-wrapper::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}

	.parent {
		display: flex;
		gap: 20rpx;
		padding: 0 30rpx;
	}

	.child {
		width: 80rpx;
		height: 80rpx;
		background: #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.active {
		background: #42b983;
		color: #fff;
	}
</style>