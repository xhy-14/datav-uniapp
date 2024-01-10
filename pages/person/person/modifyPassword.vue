<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="修改密码" />
		</view>	
		<uni-easyinput class="inputBox" trim="all" v-model="newUsername"
		placeholder="请输入新密码" placeholderStyle="color:#A6A6A6;font-size:16px"
		@input="input" style="margin-top: 50px;"></uni-easyinput>
		<uni-easyinput class="inputBox" trim="all" v-model="newUsername"
		placeholder="请再次输入新密码" placeholderStyle="color:#A6A6A6;font-size:16px"
		@input="input" style="margin-top: 10px;"></uni-easyinput>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.reLaunch({
					url: '/pages/person/person/personCenter'
				})
			}
		}
	}
</script>

<style>
	.inputBox{
		
		margin-left: 20px;
		width: 330px;
		height: 50px;
	}
</style>
