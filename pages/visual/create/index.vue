<template>
	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="上传数据" @clickLeft="back" />
		<image class="upload-img" src="../../../static/visual/upload.png"></image>

		<!-- <view class="data-input">
				<uni-easyinput type="textarea" name="dataForm" placeholder="将复制的数据粘贴到此处">
				</uni-easyinput>
			</view> -->

		<view class="sele-location">
			<lsj-upload ref="lsjUpload" childId="upload1" :count="count" :width="width" :height="height"
				:option="option" :size="size" :formats="formats" :debug="debug" :instantly="instantly"
				@uploadEnd="onuploadEnd">
				<view class="btn" :style="{width: width,height: height}">
					<button class="next-button">选择附件</button>
				</view>
			</lsj-upload>
			<view class="padding">
			</view>
		</view>
		<view class="next-location">
			<button type="default" class="next-button" @click="goto('/pages/visual/preview/index')">
				下一步 ->
			</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { useChartStore } from '/store/chart';
	import { ref, reactive, onMounted, watch } from "vue";

	const option = {
		url: 'http://112.124.59.107:8080/renren-fast/app/table/data/file', // 该地址非真实路径，需替换为你项目自己的接口地址
		name: 'file',
	}
	const instantly = true
	// 必传宽高且宽高应与slot宽高保持一致
	const width = '200rpx'
	const height = '180rpx'
	// 限制允许上传的格式，空串=不限制，默认为空
	const formats = ''
	// 文件上传大小限制
	const size = 30
	// 文件数量限制
	const count = 10
	// 文件回显列表
	const files = new Map()
	// 微信小程序Map对象for循环不显示，所以转成普通数组，不要问为什么，我也不知道
	// 是否打印日志
	const debug = true
	// 演示用
	const tabIndex = 0
	const list = []
	interface responseData {
		headers : [];
		rows : [];
	}
	const data = reactive<responseData>({
		headers: [],
		rows: []
	});
	let flag = false
	const onuploadEnd = (item) => {
		console.log(`${item.name}已上传结束，上传状态=${item.type}`);
		const res = JSON.parse(item.responseText)
		console.log(res.data, 'data')
		// data.headers = item.responseText.data.headers;
		// data.rows = item.responseText.data.rows;
		useChartStore().setTableData(res.data)
		console.log(useChartStore().tableData, 'store')
		uni.showToast({
		    title: '上传成功，点击下一步！',
		    //将值设置为 success 或者直接不用写icon这个参数
		    icon: 'success',
		    //显示持续时间为 2秒
		    duration: 2000
		})
		flag = true
	}
	const goto = (url : any) => {
		if (flag == true) {
			uni.navigateTo({
				url: url
			})
		}
		else{
			uni.showToast({
			    title: '请先选择文件',
			    //将值设置为 success 或者直接不用写icon这个参数
			    icon: 'error',
			    //显示持续时间为 2秒
			    duration: 2000
			})
		}
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