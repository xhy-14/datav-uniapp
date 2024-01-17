<template>
	<view class="content">
		<form @submit="formSubmit(userInfo)" v-model="userInfo">
			<input type="text" v-model="userInfo.userName" placeholder="用户" />
			<input type="text" v-model="userInfo.password" password="" placeholder="密码" />
			<button type="primary" form-type="submit">登录</button>
		</form>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" title="添加注释" @clickLeft="back" />
		</view>
		<view>
			<view class="message-box">
				<text style="margin: auto auto;">标题：</text>
				<uni-easyinput class="title" trim="all" v-model="title" 
				borderColor="#2979FF" placeholder="请输入内容" @input="input"></uni-easyinput> 
			</view>
			<view class="message-box">
				<text style="margin: auto auto;">署名：</text>
				<uni-easyinput class="uni-mt-5" trim="all" v-model="author" 
				placeholder="请输入内容" @input="input"></uni-easyinput> 
			</view>
			<view class="message-box">
				<text>说明：</text>
				<uni-easyinput type="textarea" autoHeight v-model="instruction" 
				placeholder="请输入内容"></uni-easyinput>
			</view>
		</view>
		
		<button type="primary" class="submitButton" @click="submit1">提交</button>
		
		<view class="chart-container">
		  <canvas class="chart" id="my-chart"></canvas>
		</view>
		
		<view class="back-next">
			<view class="back-location">
				<button @tap="backButton" class="back-button">{{'<-'}} 返回</button>
			</view>
			<view class="next-location">
				<button @tap="nextClick" class="next-button">完成</button>
			</view>
		</view>
	</view>
</template>

<script>
<<<<<<< HEAD
	export default {
		data() {
			return {
				userInfo: {
					userName: '',
					password: ''
				}
			}
		},
		methods: {
			formSubmit(e) {
				console.log(e)
			}
		}
	}
</script>
	import * as echarts from 'echarts'
	export default {
		data() {
			return {
				title: '',
				author: '',
				instruction: ''
			}
		},
		methods: {
			submit1(){
				console.log(this.title)
				console.log(this.author)
				console.log(this.instruction)
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
	.submitButton{
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
	.chart{
		  height: 300px;
		  width: 300px;
		  margin: 20px auto;
	}
	.message-box{
		display: flex;
		width: 80%;
		margin: 10px auto;
	}
	.title{
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
