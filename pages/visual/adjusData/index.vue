<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" title="参数调整" @clickLeft="back" />
		</view>
		<view>
			
		</view>
		<view class="chart-container">
		  <canvas class="chart" id="my-chart"></canvas>
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {
		  const chartDom = document.getElementById('my-chart');
		  const myChart = echarts.init(chartDom)
		  
		  const option = {
		    title: {
		      text: 'ECharts 示例'
		    },
		    tooltip: {},
		    xAxis: {
		      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
		    },
		    yAxis: {},
		    series: [{
		      name: '销量',
		      type: 'bar',
		      data: [5, 20, 36, 10, 10, 20, 15]
		    }]
		  }
		  
		  myChart.setOption(option)
		}
	}
</script>

<style>
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
	.chart{
		  height: 300px;
		  width: 300px;
		  margin: 20px auto;
	}
</style>
