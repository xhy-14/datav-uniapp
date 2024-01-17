<template>
	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="预览数据" @clickLeft="back" />
		<image class="upload-img" src="../../../static/visual/20.png"></image>
		<view class="data-input">
			<uni-easyinput type="textarea" name="dataForm" placeholder="">
			</uni-easyinput>
		</view>


		<view class="back-next">
			<view class="back-location">
				<button @tap="back" class="back-button">{{'<-'}} 返回</button>
			</view>
			<view class="next-location">
				<button @tap="nextClick" class="next-button">下一步 -></button>
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
			back() {
				uni.reLaunch({
					url: '/pages/visual/create/index'
				})
			},
			nextClick() {
				uni.reLaunch({
					url: '/pages/visual/selectChart/index'
				})
			},
			nextClick() {
				uni.reLaunch({
					url: '/pages/visual/selectChart/index'
				})
			},
		},

		onLoad(e) {
			console.log(e);
		},

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
		background-color: #43CF7C;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>