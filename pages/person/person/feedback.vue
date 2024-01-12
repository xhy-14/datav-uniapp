<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="意见反馈" />
		</view>	
		
		<view class="feedbackDetail"><text>反馈内容</text></view>
		
		<uni-easyinput type="textarea" autoHeight v-model="content"
		 placeholder="请输入反馈内容" class="contentBox" @input="input"></uni-easyinput>
		 
		 <view class="contact"><text>联系方式</text></view>
		 
		<uni-easyinput  trim="all" v-model="contactWay" 
		placeholder="请输入联系方式" class="contactNum" @input="input"></uni-easyinput>
		
		<button style="width: 90%; margin-top: 30px;" type="primary" @click="submit1">提交</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				contactWay: ''
			}
		},
		methods: {
			submit1(){
				console.log(this.contactWay);
				console.log(this.content)
			},
			back(){
				
			}
		}
	}
</script>

<style>
	.feedbackDetail{
		margin-top: 30px;
		margin-left: 20px;
		font-size: 20px;
		font-weight: bold;
	}
	.contentBox{
		width: 90%;
		margin: 10px auto;
	}
	.contact{
		margin-top: 20px;
		margin-left: 20px;
		font-size: 20px;
		font-weight: bold;
	}
	.contactNum{
		width: 90%;
		margin: 10px auto;
	}
</style>
