<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" title="生成图表" @clickLeft="back" />
		</view>
		
		<!-- 图表 -->
		<view class="chart-container">
		  <canvas canvas-id="my-chart" class="chart" id="my-chart"></canvas>
		</view>
		
		<view class="back-next">
			<view class="back-location">
				<button @tap="backButton" class="back-button">{{'<-'}} 返回</button>
			</view>
			<view class="next-location">
				<button @tap="exportChart" class="next-button">生成图表</button>
			</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts' 
	import { useChartStore } from '/store/chart';
	// 一定要先定义，后面再定义就不是一个东西了，一定要是echart的实例
	var myChart = {}
	var chartDom = {}
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			exportChart2(){
			  uni.canvasToTempFilePath({
				  canvasId: 'my-chart',
				success: function(tempFilePath) {
					console.log(tempFilePath.tempFilePath),
				  uni.saveImageToPhotosAlbum({
					filePath: tempFilePath.tempFilePath,
					success: function() {
					  uni.showToast({
						title: '保存成功',
						icon: 'success'
					  });
					},
					fail: function(error) {
					  uni.showToast({
						title: '保存失败',
						icon: 'none'
					  });
					  console.log(error);
					}
				  })
				  }
				  })
			},
			downloadImg(file, name) {
			    let parts = file.split(';base64,')
			    let contentType = parts[0].split(':')[1]
			    let raw = window.atob(parts[1]) // 解码base64得到二进制字符串
			    let rawLength = raw.length
			    let uInt8Array = new Uint8Array(rawLength) // 创建8位无符号整数值的类型化数组
			
			    for (let i = 0; i < rawLength; ++i) {
			        uInt8Array[i] = raw.charCodeAt(i) // 数组接收二进制字符串
			    }
			    // 创建blob对象设置文件类型
			    var blob = new Blob([uInt8Array], { type: contentType });
			    console.log(blob);
			
			    var aLink = document.createElement("a");
			    // 下载的文件名称
			    aLink.download = name + '.' + contentType.split('/')[1];
			    aLink.href = URL.createObjectURL(blob);
			    // 执行点击事件进行下载
			    aLink.click()
			
			},
			exportChart(){
				const base64Image = myChart.getDataURL({ type: 'png', pixelRatio: 2 });
				console.log(base64Image)
				// 取的文件名
				this.downloadImg(base64Image, '文件')
			
			},
			
			
			backButton(){
				uni.navigateTo({
					url: '/pages/visual/comments/index'
				})
			}
			
		},
		mounted() {
		  chartDom = document.getElementById('my-chart');
		  myChart = echarts.init(chartDom)
		  
		  const option = useChartStore().options
		  
		  myChart.setOption(option)
		}
	}
</script>

<style>
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
