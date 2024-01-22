<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-text="取消" @clickLeft="back" title="修改电子邮箱" />
		</view>
		<uni-easyinput class="inputM" trim="all" v-model="newEmail"
		placeholder="请输入电子邮箱" placeholderStyle="color:#A6A6A6;font-size:16px"
		@input="input"></uni-easyinput>
		
		<!-- 并获取验证码 -->
		<uni-easyinput class="captcha" suffixIcon="email" v-model="captcha" 
		placeholder="请输入验证码" placeholderStyle="color:#A6A6A6;font-size:16px"
		 @iconClick="getCaptcha"></uni-easyinput>
		 
		 <view class="mobileButton">
		 	<button type="primary" @click="submit1">确认修改</button>
		 </view>
		 
		 <uni-popup class="editMessage" ref="editMessage" type="message">
		 	<uni-popup-message :type="msgType" :message="messageText" duration="2000"></uni-popup-message>
		 </uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newEmail: '',
				captcha: '',
				msgType: '',
				messageText: ''
			}
		},
		methods: {
			back() {
				uni.reLaunch({
					url: '/pages/person/person/ModifyInformation'
				})
			},
			submit1(){
				if(this.newEmail === '')
				this.messageToggle('error','电子邮箱不能为空')
				else if(this.captcha === ''){
					this.messageToggle('error','验证码不能为空')
				}
			},
			messageToggle(type, msg) {
				this.msgType = type
				this.messageText = `${msg}`
				console.log(this.messageText)
				this.$refs.editMessage.open()
			}
		}
	}
</script>

<style>

	.inputM{
		margin-top: 50px;
		margin-left: 20px;
		width: 330px;
		height: 50px;
	}
	.captcha{
		margin-top: 10px;
		margin-left: 20px;
		width: 330px;
		height: 50px;
	}
	.mobileButton{
		margin-top: 100px;
		margin-left: 20px;
		width: 330px;
	}
</style>



