<template>
	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="上传数据" @clickLeft="back" />
		<image class="upload-img" src="../../../static/visual/upload.png"></image>
		<view class="data-input">
			<form @submit="collectData">
				<uni-easyinput type="textarea" v-model="value" placeholder="将复制的数据粘贴到此处">
				</uni-easyinput>
			</form>
		</view>

		<view class="sele-location">
			<uni-file-picker v-model="value" file-mediatype="all">
				<button class="sele-button">选择文件</button>
			</uni-file-picker>
		</view>

		<view class="next-location">
			<button class="next-button" @click="nextClick" form-type="submit">下一步 -></button>
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
			nextClick() {
				uni.reLaunch({
					url: '/pages/visual/preview/index'
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			collectData(e) {
				console.log(e);
			},
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
		background-color: lightgreen;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>