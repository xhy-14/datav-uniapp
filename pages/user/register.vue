<template>
	<view class="register-view">
		<cover-image src="../../static/title.png" class="datav-icon"></cover-image>
		<view class="register-title"><text>欢迎注册</text></view>
		<view class="register-title-child">
			<text>欢迎使用Dataswap</text>
		</view>
		<view class="register-continer">
			<uni-forms :modelValue="registerForm">
				<uni-easyinput prefixIcon="email" v-model="registerForm.userForm.email" placeholder="请输入账号">
				</uni-easyinput>
				<uni-easyinput type="password" style="margin-top: 20px;" prefixIcon="locked" v-model="registerForm.userForm.password"
					placeholder="请输入密码">
				</uni-easyinput>
				<uni-easyinput type="password" style="margin-top: 20px;" prefixIcon="locked" v-model="registerForm.passwordAgain"
					placeholder="请再输入密码">
				</uni-easyinput>

			</uni-forms>
			<button class="register-submit" type="primary" @click="register">注册</button>
			<view class="to-register">
				<uni-link href="/#/pages/user/login" text="已有账号?立即登录"></uni-link>
			</view>
			<uni-popup class="loginMessage" ref="loginMessage" type="message">
				<uni-popup-message :type="msgType" :message="messageText" duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>

</template>

<script>
	import {
		registerApi
	} from '@/api/user/user.js'
	export default {
		data() {
			return {
				registerForm: {
					userForm: {
						email: "",
						password: ""
					},
					passwordAgain: ""
				},
				messageText: "",
				msgType: ""
			}
		},
		methods: {
			register() {
				if (this.registerForm.userForm.email === '') {
					this.messageToggle("error", "输入电话号码不能为空")
					return
				} else if (this.registerForm.userForm.eamil.length != 11) {
					this.messageToggle("error", "输入的电话号码必须是11位长！")
					return
				} else if (this.registerForm.userForm.password.length < 8 || this.registerForm.userForm.password.length >
					16) {
					this.messageToggle("error", "密码长度必须为8-16位")
					return
				}
				if (this.registerForm.passwordAgain != this.registerForm.userForm.password) {
					// 后期修改
					this.messageToggle("error", "两次输入密码不一样")
					return
				}
				registerApi(this.registerForm.userForm)
					.then(res => {
						let statusCode = res.code;
						let message = res.msg
						console.log(statusCode, 'code', message, 'message')
						if (statusCode == "00000") {
							uni.showToast({
								title: '注册成功',
								//将值设置为 success 或者直接不用写icon这个参数
								icon: 'success',
								//显示持续时间为 2秒
								duration: 2000
							})
							uni.reLaunch({
									url: 'pages/user/register'
								})
							}
							else {
								this.messageToggle("error", res.msg);
							}
					}).catch(() => {
						this.messageToggle("error", "发生错误，请稍后尝试");
					})
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
	.register-title {
		margin: 0 auto;
		width: 70%;
		text-align: center;
		font-size: 36px;
	}

	.register-title-child {
		text-align: center;
		margin-top: 6px;
		color: #cccc;
	}

	.datav-icon {
		width: 85%;
		margin: 0 auto;
		margin-top: 49px;
	}

	.register-continer {
		width: 70%;
		margin: 0 auto;
	}

	.register-continer {
		margin-top: 20px;
	}

	.register-select {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}

	.register-submit {
		margin-top: 20px;
		border-radius: 30px;
	}

	.to-register {
		text-align: center;
		margin-top: 20px;
	}
</style>