<template>
	<view class="content">
		<!-- <form @submit="formSubmit(userInfo)" v-model="userInfo">
			<input type="text" v-model="userInfo.userName" placeholder="用户" />
			<input type="text" v-model="userInfo.password" password="" placeholder="密码" />
			<button type="primary" form-type="submit">登录</button>
		</form> -->
	</view>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" title="添加注释" @clickLeft="back" />
		</view>
		<view>
			<view class="message-box">
				<text style="margin: auto auto;">标题：</text>
				<uni-easyinput class="title" trim="all" v-model="title" borderColor="#2979FF"
					placeholder="请输入内容"></uni-easyinput>
			</view>
			<!-- <view class="message-box">
				<text style="margin: auto auto;">署名：</text>
				<uni-easyinput class="uni-mt-5" trim="all" v-model="author" 
				placeholder="请输入内容" @input="input"></uni-easyinput> 
			</view> -->
			<view class="message-box">
				<text>说明：</text>
				<uni-easyinput type="textarea" autoHeight v-model="instruction" placeholder="请输入内容"></uni-easyinput>
			</view>
		</view>

		<button type="primary" class="submitButton" @click="submit1">提交</button>

		<!-- 图表 -->
		<view class="chart-container">
			<canvas class="chart" id="my-chart"></canvas>
		</view>

		<view class="back-next">
			<view class="back-location">
				<button @tap="back" class="back-button">{{'<-'}} 返回</button>
			</view>
			<view class="next-location">
				<button @tap="nextClick" class="next-button">下一步</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import * as echarts from 'echarts'
	import { useChartStore } from '/store/chart';
	import { onMounted, ref } from 'vue'

	let title = ref('标题')
	let instruction = ref('标题')
	let option = useChartStore().options

	const submit1 = () => {
		option.title.text = title.value

		init()
		console.log(title.value)
	}
	const back = () => {
		uni.reLaunch({
			url: '/pages/visual/selectChart/index'
		})
		
	}
	const nextClick = () => {
		uni.navigateTo({
			url: '/pages/visual/exportChart/exportChart'
		})
	}
	const init = () => {
		const chartDom = document.getElementById('my-chart');
		const myChart = echarts.init(chartDom)
		option = useChartStore().options
		myChart.setOption(option)
		useChartStore().setOptions(option)
	}
	onMounted(() => {
		init()
	})
</script>

<style>
	.submitButton {
		width: 60%;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.chart-container {
		/* height: 400px; */
		width: 95%;
		border: 1px solid #ebeff6;
		margin: 10px auto;
		box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.25);
	}

	.chart {
		height: 300px;
		width: 300px;
		margin: 20px auto;
	}

	.message-box {
		display: flex;
		width: 80%;
		margin: 10px auto;
	}

	.title {
		width: 300px;
	}

	.back-next {
		display: flex;
		margin-bottom: 20px;
	}


	.back-location {
		width: 100px;
		padding-top: 95px;
		padding-left: 50px;
	}

	.back-button {
		background-color: white;
		color: black;
		width: 100px;
		font-size: 13px;
	}

	.next-location {
		padding-top: 95px;
		padding-left: 100px;
	}

	.next-button {
		background-color: #43CF7C;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>