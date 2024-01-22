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
		
		<view class="back-next">
			<view class="back-location">
				<button @tap="backButton" class="back-button">{{'<-'}} 返回</button>
			</view>
			<view class="next-location">
				<button @tap="nextClick" class="next-button">下一步</button>
			</view>
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
			nextClick(){
				uni.navigateTo({
					url: '/pages/visual/comments/index'
				})
			}
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
		padding-left: 80px;
	}
	
	.next-button {
		background-color: #43CF7C;
		color: white;
		width: 100px;
		font-size: 13px;
		height: 50px;
		justify-content: center;
		align-items: center;
		display: flex;
	}
</style>
