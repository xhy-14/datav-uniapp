<template>

	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="选择图表类型" @clickLeft="back" />
	</view>
	<view v-if="noVip">
		<view class="tips"><text>识别到您是普通用户，Dataswap只提供两个图形</text></view>
		<uni-grid :column="3" borderColor="#ebf3f9" :highlight="true" @change="change">
			<uni-grid-item v-for="(item, index) in noVipList" :index="index" :key="index" style=" height: 100px;">
				<view class="grid-item-box">
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
	<view v-else>
		<uni-grid :column="3" borderColor="#ebf3f9" :highlight="true" @change="change">
			<uni-grid-item v-for="(item, index) in VipList" :index="index" :key="index" style=" height: 100px;">
				<view class="grid-item-box">
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>

	
  <view class="chart-container">
    <canvas class="chart" id="my-chart"></canvas>
  </view>
  
  <view class="back-next">
  	<view class="back-location">
  		<button @tap="backButton" class="back-button">{{'<-'}} 返回</button>
  	</view>
  	<view class="next-location">
  		<button @tap="nextClick" class="next-button">下一步 -></button>
  	</view>
  </view>

</template>

<script>
	import * as echarts from 'echarts'

	export default {
		data() {
			return {
				noVip: true,
				noVipList: [{
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
				],
				VipList: [{
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
		},
		methods: {
			back() {
				uni.reLaunch({
					url: '/pages/visual/preview/index'
				})
			},
			change(e){
				console.log(e.detail.index)
			},
			backButton(){
				uni.navigateTo({
					url: '/pages/visual/create/index'
				})
			},
			nextClick(){
				uni.navigateTo({
					url: '/pages/visual/adjusData/index'
				})
			}
			
		}

	}
</script>

<style scoped>
   .tips{
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
  .chart{
	  height: 300px;
	  width: 300px;
	  margin: 20px auto;
  }
  .swiper{
	  height: 400px;
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

