<template>
	<view>
		<view>
			<view class="container">
				<view class="row">
					<view class="col">
						<cover-image src="../../static/title.png" class="datav-icon"></cover-image>
					</view>
					<view class="col">
						<view class="notice-icon">
							<uni-icons type="notification" size="30"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view>
			<view class="search">
				<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @input="input" @cancel="cancel"
					@clear="clear">
				</uni-search-bar>
			</view>
			<view class="rencent-edit">
				最近编辑
			</view>
			<view class="body-box">
				<view style="height: 140px;">
					<cover-image src="../../static/index-img.png" class="index-img"></cover-image>
				</view>
				<view class="index-introduce">还没有登录，没有文件</view>
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
		onLoad() {

		},
		methods: {
			input(res) {
				console.log('input:', res)
			},
			search(res) {
				uni.showToast({
					title: "搜索文件 --- " + res.value,
					icon: 'none'
				})
			},
			clear(res) {
				uni.showToast({
					title: '清除',
					icon: 'none'
				})
			},

			cancel(res) {
				uni.showToast({
					title: '点击取消',
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 0px;
	}

	.row {
		display: flex;

	}

	.col {
		padding: 5px;
		box-sizing: border-box;
	}

	.datav-icon {
		width: 70%;
		margin-left: 10px;
		height: 40px;
	}

	.notice-icon {
		margin-top: 5px;
		margin-right: 20px;
	}

	.search {
		text-align: center;
	}

	.rencent-edit {
		margin-top: 10px;
		margin-left: 20px;
		color: skyblue;
		font-size: 20px;
	}

	.body-box {
		margin: 15px 10px 10px;
		height: 200px;
		width: 100%;
	}

	.index-img {
		margin: 60px 60px 50px 95px;
		width: 50%;
		height: 140px;
	}

	.index-introduce {
		text-align: center;
		font-size: 15px;
	}
</style>