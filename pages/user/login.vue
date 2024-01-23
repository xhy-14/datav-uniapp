<template>
	<view class="login-view">
		<cover-image src="../../static/title.png" class="datav-icon"></cover-image>
		<view class="login-title"><text>欢迎登录</text></view>
		<view class="login-title-child">
			<text>请使用已注册的账号登录</text>
		</view>
		<view class="login-continer">
			<uni-forms :modelValue="loginForm">
				<uni-easyinput prefixIcon="email" v-model="loginForm.email" placeholder="请输入账号 ">
				</uni-easyinput>

				<uni-easyinput type="password" style="margin-top: 20px;" prefixIcon="locked" v-model="loginForm.password"
					placeholder="请输入密码">
				</uni-easyinput>
				

				<view class="captcha">
					<input  v-model="loginForm.captcha" class="uni-input captcha-input" type="text"
						placeholder="请输入验证码" />
					<cover-image :src="captchaPath"></cover-image>
				</view>


				<view class="login-select">
					<label class="radio" @click="change()" >
						<radio value="r2" @click="change()" :checked="remberPassword" />记住密码
					</label>

					<uni-link href="#/pages/user/forgetPassword" text="忘记密码?"></uni-link>
				</view>

			</uni-forms>
			<button class="login-submit" type="primary" @click="login">登录</button>
			<view class="to-register">
				<uni-link href="#/pages/user/register" text="没有账号?立即注册"></uni-link>
			</view>
		</view>

		<uni-popup class="loginMessage" ref="loginMessage" type="message">
			<uni-popup-message :type="msgType" :message="messageText" duration="2000"></uni-popup-message>
		</uni-popup>
	</view>

</template>

<script>
	import {
		loginApi,
		getCaptchaApi,
	} from '@/api/user/user.js'
	import http from '../../api/http'
	import {
		getUUID
	} from '@/utils/common.js'
	export default {
		data() {
			return {
				loginForm: {
					email: "",
					password: "",
					captcha: "",
					uuid: ""
				},
				remberPassword: false,
				captchaPath: "",
				messageText: "",
				msgType: ""
				
				
			}
		},
		created() {
			this.loginForm.uuid = getUUID()
			this.captchaPath = http.baseUrl + "captcha.jpg?uuid=" + this.loginForm.uuid
		},
		onMounted() {},
		methods: {
			login() {
				console.log(1)
				if(this.loginForm.mobile === '' ){
					this.messageToggle("error","输入电话号码不能为空")
					return
				}
				else if(this.loginForm.password === ''){
					this.messageToggle("error","密码不能为空")
					return 
				}
				else if(this.loginForm.captcha === ''){
					this.messageToggle("error","验证码不能为空")
					return
				}
				else if(this.loginForm.mobile.length != 11){
					this.messageToggle("error","输入的电话号码必须是11位长！")
					return
				}
				else if(this.loginForm.password.length <8 || this.loginForm.password.length > 16){
					this.messageToggle("error","密码长度必须为8-16位")					
					return
				} 
				loginApi(this.loginForm)
					.then(res => {
						// 判断账号不存在、错误、密码错误、验证码错误的部分
						// 帐号不存在
						let statusCode = res.code;
						if(statusCode === "A0201"){
							this.messageToggle("error","用户不存在");
							return;
						}
						else if(statusCode === "A0210"){
							this.messageToggle("error","用户密码错误");
							return;
						}
						else{
							let user = {
								name: res.data.user.name,
								mobile: res.data.user.mobile,
								token: res.data.token
							}
							// 登录成功，存储用户的信息
							uni.setStorageSync('nowUser',user)
							this.messageToggle("success","欢迎登录");
							// 获取用户信息例子
							const nowUser = uni.getStorageSync('nowUser')
							console.log(nowUser)
							uni.reLaunch({
								url: '/pages/index/index'
							})
						}
					})
					.catch(err => {
						this.messageToggle('error', "登录异常, 请重试")
						console.log(err)
					})
			},
			change() {
				this.remberPassword = !this.remberPassword
				console.log(this.remberPassword)
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
	.login-title {
		margin: 0 auto;
		width: 70%;
		text-align: center;
		font-size: 36px;
	}

	.login-title-child {
		text-align: center;
		margin-top: 6px;
		color: #cccc;
	}

	.datav-icon {
		width: 85%;
		margin: 0 auto;
		margin-top: 49px;
	}

	.login-continer {
		width: 70%;
		margin: 0 auto;
	}

	.login-continer {
		margin-top: 20px;
	}

	.login-select {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}

	.login-submit {
		margin-top: 20px;
		border-radius: 30px;
	}

	.to-register {
		text-align: center;
		margin-top: 20px;
	}

	.captcha {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		text-align: center;
	}
	.loginMessage{
		position: fixed;
		top: 50px;
	}
</style>