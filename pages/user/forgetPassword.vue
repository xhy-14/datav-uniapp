<template>
	<view class="forget-view">	
		<cover-image src="../../static/title.png" class="datav-icon"></cover-image>
		<view class="forget-title"><text>忘记密码</text></view>
		<view class="forget-title-child">
			<text>请使用已注册的账号</text>
		</view>
		<view class="forget-continer">
			<uni-forms :modelValue="forgetForm">
				<uni-easyinput prefixIcon="phone" v-model="forgetForm.userForm.mobile" placeholder="请输入手机账号">
				</uni-easyinput>
				<uni-easyinput style="margin-top: 20px;" prefixIcon="locked" v-model="forgetForm.userForm.password" placeholder="请输入新密码">
				</uni-easyinput>
				<uni-easyinput style="margin-top: 20px;" prefixIcon="locked" v-model="forgetForm.passwordAgain" placeholder="请再输入新密码">
				</uni-easyinput>
				
			</uni-forms>
			<button class="forget-submit" type="primary" @click="forget">提交</button>
			<view class="to-forget">
				<uni-link href="/#/pages/user/login" text="返回登录"></uni-link>
			</view>
			<uni-popup class="loginMessage" ref="loginMessage" type="message">
				<uni-popup-message :type="msgType" :message="messageText" duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				forgetForm: {
					userForm: {
						mobile: "",
						password: ""
					},
					passwordAgain: ""
					
				},
				msgType: "",
				messageText: "",
				
			}
		},
		methods: {
			forget(){
				if(this.forgetForm.userForm.mobile === ''){
					this.messageToggle("error","输入电话号码不能为空")
					return
				}
				else if(this.forgetForm.userForm.mobile.length != 11){
					this.messageToggle("error","输入的电话号码必须是11位长！")
					return
				}
				else if(this.forgetForm.userForm.password.length <8 || this.forgetForm.userForm.password.length > 16){
					this.messageToggle("error","密码长度必须为8-16位")					
					return
				} 
				if( this.forgetForm.passwordAgain != this.forgetForm.userForm.password) {
					// 后期修改
					this.messageToggle("error","两次输入密码不一样")					
					return
				}
				// 这里写接口的实现
				
			},
			messageToggle(type, msg) {
				this.msgType = type
				this.messageText = `${msg}`
				console.log(this.messageText)
				this.$refs.loginMessage.open()
			}
		}
	}
</script>

<style>

	
	.forget-title {
		margin: 0 auto;
		width: 70%;
		text-align: center;
		font-size: 36px;
	}
	
	.forget-title-child {
		text-align: center;
		margin-top: 6px;
		color: #cccc;
	}
	
	.datav-icon {
		width: 85%;
		margin: 0 auto;
		margin-top: 49px;
	}
	
	.forget-continer {
		width: 70%;
		margin: 0 auto;
	}
	
	.forget-continer {
		margin-top: 20px;
	}
	
	.forget-select{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	.forget-submit{
		margin-top: 20px;
		border-radius: 30px;
	}
	
	.to-forget{
		text-align: center;
		margin-top: 20px;
	}
</style>
