<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="支付" />
		</view>
		<view style="margin: 10px auto; width: 90%;text-align: center;">
			<image class="resultImg" :src="resultImg"></image>
		</view>
		<view style="width: 90%;margin: 20px auto;text-align: center;"><text>{{resultText}}</text></view>
		<button type="warn" @click="okk" style="width: 90%;">完成 </button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resultImg: '../../../static/waiting.png',
				// resultImg: '../../../static/error.png',
				// resultImg: '../../../static/right.png',
				resultText: '支付核验中，请稍后..........',
				// resultText: '支付失败，请重新支付',
				// resultText: '支付成功',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.resultImg{
		width: 100px;
		height: 100px;
		
	}
</style>
