<template>

	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="选择图表类型" @clickLeft="back" />
	</view>
	<view v-if="noVip">
		<view class="tips"><text>识别到您是普通用户，Dataswap只提供两个图形</text></view>


		<swiper class="swiper" :indicator-dots="true">
			<swiper-item>
				<uni-grid :column="3" borderColor="#ebf3f9" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in noVipList" :index="index" :key="index"
						style=" height: 100px;">
						<view class="grid-item-box">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
		</swiper>
	</view>
	<view v-else>
		<swiper class="swiper" :indicator-dots="true">
			<swiper-item>
				<uni-grid :column="3" borderColor="#ebf3f9" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in VipList" :index="index" :key="index" style=" height: 100px;">
						<view class="grid-item-box">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
		</swiper>
	</view>


	<view class="chart-container">
		<canvas class="chart" id="my-chart"></canvas>
	</view>

	<view class="back-next">
		<view class="back-location">
			<button type="default" class="back-button" @click="back">
				{{'<-'}} 返回
			</button>
		</view>
		<view class="next-location">
			<button type="default" class="next-button" @click="goto('/pages/visual/adjusData/index')">
				下一步 ->
			</button>
		</view>
	</view>

</template>

<script lang="ts" setup>
	import * as echarts from 'echarts'
	import { useRouter } from 'vue-router'
	import { onMounted, ref, nextTick, watch } from 'vue'
	import { useChartStore } from '/store/chart';
	let noVip = true
	let noVipList = [{
		url: '../../../static/visual/折线.png',
		text: '折线图',
	},
	{
		url: '../../../static/visual/条形.png',
		text: '条形图',
	},
	{
		url: '../../../static/visual/柱形.png',
		text: '柱形'
	}
	]
	let VipList = [{
		url: '../../../static/visual/折线.png',
		text: '折线图',
	},
	{
		url: '../../../static/visual/饼图.png',
		text: '饼图',
	},
	{
		url: '../../../static/visual/散点图.png',
		text: '散点图',
	},
	{
		url: '../../../static/visual/条形.png',
		text: '条形图',
	},
	{
		url: '../../../static/visual/分组条形图.png',
		text: '分组条形图'
	},
	{
		url: '../../../static/visual/堆叠条形图.png',
		text: '堆叠条形图'
	},
	{
		url: '../../../static/visual/柱形.png',
		text: '柱形'
	},
	{
		url: '../../../static/visual/分组柱形图.png',
		text: '分组柱形图'
	},
	{
		url: '../../../static/visual/堆叠柱形.png',
		text: '堆叠柱形图'
	},
	{
		url: '../../../static/visual/堆叠柱形.png',
		text: '堆叠柱形图'
	}
	]

	var chartInfo = useChartStore().options
	let type = ref('line')
	const change = (e) => {
		let { index } = e.detail
		if (index == 0) {
			type.value = 'line'

		}
		else if (index == 1) {
			type.value = 'bar'
		}
		console.log(type.value, 'type value', index, 'index')
		document.getElementById('my-chart').removeAttribute("_echarts_instance_");
		document.getElementById('my-chart').innerHTML = "";
		initChart()
	}
	const initChart = () => {
		nextTick(() => {
			var myChart = echarts.init(document.getElementById('my-chart'));
			// 绘制图表
			var option = chartInfo

			console.log("option view", option)
			const option_pie = {
				series: [
					{
						type: 'pie',

						data: [
							{
								value: 335,
								name: '1'
							},
							{
								value: 234,
								name: '2'
							},
							{
								value: 1548,
								name: '3'
							}
						]
					}
				]
			};
			if (type.value == 'pie') { myChart.setOption(option_pie); }
			else {
				console.log("option view", option)
				option.series[0].type = type.value
				myChart.setOption(option);
			}
			useChartStore().setOptions(option)
		})
	}
	onMounted(() => {
		// 基于准备好的dom，初始化echarts实例
		chartInfo = useChartStore().options
		initChart()
		console.log(chartInfo)
	})

	const back = () => {
		uni.reLaunch({
			url: '/pages/visual/preview/index'
		})
		document.getElementById('my-chart').removeAttribute("_echarts_instance_");
		document.getElementById('my-chart').innerHTML = "";
	}
	let router = useRouter()

	const goto = (url : any) => {
		uni.navigateTo({
			url: url
		})
	}

</script>

<style scoped>
	.tips {
		width: 95%;
		margin: 5px auto;
		color: #808080;
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

	.swiper {
		height: 120px;
	}

	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		height: 100px;

	}

	.image {
		width: 92px;
		height: 50px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}



	.back-next {
		display: flex;
		margin-top: 20px;
		left: 10px;
	}


	.back-location {
		width: 100px;
		top: 95px;
		left: 60px;
	}

	.back-button {
		background-color: white;
		color: black;
		width: 100px;
		font-size: 13px;
		left: 15px;
	}

	.next-location {
		top: 95px;
		left: 100px;
		margin-left: 160px;
	}

	.next-button {
		background-color: #43CF7C;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>