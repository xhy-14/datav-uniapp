<template>
	<view class="register-view">
		<cover-image src="../../static/title.png" class="datav-icon"></cover-image>
		<view class="register-title"><text>欢迎注册</text></view>
		<view class="register-title-child">
			<text>请使用已注册的账号登录</text>
		</view>
		<view class="register-continer">
			<uni-forms :modelValue="registerForm">
				<uni-easyinput prefixIcon="phone" v-model="registerForm.userForm.mobile" placeholder="请输入手机账号">
				</uni-easyinput>
				<uni-easyinput style="margin-top: 20px;" prefixIcon="locked" v-model="registerForm.userForm.password" placeholder="请输入密码">
				</uni-easyinput>
				<uni-easyinput style="margin-top: 20px;" prefixIcon="locked" v-model="registerForm.passwordAgain" placeholder="请再输入密码">
				</uni-easyinput>
				
			</uni-forms>
			<button class="register-submit" type="primary" @click="register">注册</button>
			<view class="to-register">
				<uni-link href="https://uniapp.dcloud.io/" text="已有账号?立即登录"></uni-link>
			</view>
		</view>
	</view>

</template>

<script>
	import {registerApi} from '@/api/user/user.js'
	export default {
		data() {
			return {
				registerForm: {
					userForm: {
						mobile: "",
						password: ""
					},
					passwordAgain: ""
				}
			}
		},
		methods: {
			register() {
				if( this.registerForm.passwordAgain != this.registerForm.userForm.password) {
					// 后期修改
					alert("两次密码不一致！")
					return 
				}
				registerApi(this.registerForm.userForm)
				.then(res=>{
					alert("注册成功！")
					uni.reLaunch({
						url: 'pages/user/register'
					})
				})
				.catch(err=>{{
					console.log("err")
				}})
			},
			change() {
				this.remberPassword = !this.remberPassword
				console.log(this.remberPassword)
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
	
	.register-select{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	.register-submit{
		margin-top: 20px;
		border-radius: 30px;
	}
	
	.to-register{
		text-align: center;
		margin-top: 20px;
	}
</style>