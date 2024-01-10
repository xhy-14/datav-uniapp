<template>
	<view class="box-bg">
		<uni-nav-bar left-icon="left" title="上传数据" />
		<image class="upload-img" src="../../../static/visual/upload.png"></image>
		<view class="data-input">
			<uni-easyinput type="textarea" v-model="value" placeholder="">
			</uni-easyinput>
		</view>


		<view class="back-next">
			<view class="back-location">
				<button @tap="dataBack" class="back-button">{{'<-'}} 返回</button>
			</view>
			<view class="next-location">
				<button @tap="dataNext" class="next-button">下一步 -></button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			dataBack() {
				uni.navigateBack()
			},
			// dataNext() {
			// 	uni.navigateTo({
			// 			url: '/pages/visual/preview/index'
			// 		}
			// 	}
			// 跳转问题
		}

	}
</script>

<style>
	.upload-img {
		width: 100%;
		height: 170px;
	}

	.data-input {
		width: 80%;
		height: 30px;
		padding: 50px 50px 50px 50px;
	}

	.back-next {
		display: flex;
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
		background-color: lightgreen;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>