<template>
	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="上传数据" @clickLeft="back" />
		<image class="upload-img" src="../../../static/visual/upload.png"></image>
		
			<!-- <view class="data-input">
				<uni-easyinput type="textarea" name="dataForm" placeholder="将复制的数据粘贴到此处">
				</uni-easyinput>
			</view> -->

			<view class="sele-location">
				<lsj-upload
					ref="lsjUpload"
					childId="upload1"
					:count="count"
					:width="width"
					:height="height"
					:option="option"
					:size="size"
					:formats="formats"
					:debug="debug"
					:instantly="instantly"
					@uploadEnd="onuploadEnd"
					>
						<view class="btn" :style="{width: width,height: height}">选择附件</view>
				</lsj-upload>
				
				
				<view class="padding">
							
					
					
				</view>
			</view>

			<view class="next-location">
				<router-link to="/pages/visual/preview/index" class="back-button">下一步 -></router-link>
				
			</view>
	</view>
</template>

<script lang="ts" setup>
	import {useChartStore} from	'/store/chart';
	import { ref, reactive, onMounted, watch } from "vue";

	const option = {
		// 上传服务器地址，需要替换为你的接口地址
		url: 'http://112.124.59.107:8080/renren-fast/app/table/data/file', // 该地址非真实路径，需替换为你项目自己的接口地址
		// 上传附件的key
		name: 'file',
		// 根据你接口需求自定义请求头,默认不要写content-type,让浏览器自适配
	
		
	}
	const instantly = true
	// 必传宽高且宽高应与slot宽高保持一致
	const width = '180rpx'
	const height =  '180rpx'
	// 限制允许上传的格式，空串=不限制，默认为空
	const formats= ''
	// 文件上传大小限制
	const size= 30
	// 文件数量限制
	const count= 1
	// 文件回显列表
	const files= new Map()
	// 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
	// 是否打印日志
	const debug= true
	
	
	// 演示用
	const tabIndex= 0
	const list =[]
	
	interface responseData {
	  headers: [];
	  rows: [];
	}
	const data = reactive<responseData>({
	  headers: [],
	  rows: []
	});
	const onuploadEnd =(item)=> {
		console.log(`${item.name}已上传结束，上传状态=${item.type}`);
		const res = JSON.parse(item.responseText)
		console.log(res.data,'data')
		// data.headers = item.responseText.data.headers;
		// data.rows = item.responseText.data.rows;
		useChartStore().setTableData(res.data)
		console.log(useChartStore().tableData,'store')
	}
</script>

<style>
	.upload-img {
		width: 100%;
		height: 110px;
	}

	.data-input {
		width: 80%;
		height: 30px;
		padding: 50px 50px 50px 50px;
	}

	.sele-location {
		padding-top: 35px;
		padding-right: 170px;
	}

	.sele-button {
		background-color: royalblue;
		color: white;
		width: 100px;
		font-size: 13px;
	}

	.next-location {
		padding-top: 65px;
		padding-left: 190px;
	}

	.next-button {
		background-color: #43CF7C;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>