<template>
	<view class="login-view">
		<cover-image src="../../static/title.png" class="datav-icon"></cover-image>
		<view class="login-title"><text>欢迎注册</text></view>
		<view class="login-title-child">
			<text>请使用已注册的账号登录</text>
		</view>
		<view class="login-continer">
			<uni-forms :modelValue="loginForm">
				<uni-easyinput prefixIcon="phone" v-model="loginForm.phone" placeholder="请输入手机账号">
				</uni-easyinput>
				<uni-easyinput style="margin-top: 20px;" prefixIcon="locked" v-model="loginForm.phone" placeholder="请输入密码">
				</uni-easyinput>

				<view class="login-select">
					<label class="radio" @click="change()" :checked="remberPassword">
						<radio value="r2" />记住密码
					</label>
					
					<uni-link href="https://uniapp.dcloud.io/" text="忘记密码?"></uni-link>
				</view>

			</uni-forms>
			<button class="login-submit" type="primary" @click="login">登录</button>
			<view class="to-register">
				<uni-link href="https://uniapp.dcloud.io/" text="没有账号?立即注册"></uni-link>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					phone: "",
					password: ""
				},
				remberPassword: false
			}
		},
		methods: {
			login() {

			},
			change() {
				this.remberPassword = !this.remberPassword
				console.log(this.remberPassword)
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
	
	.login-select{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	.login-submit{
		margin-top: 20px;
		border-radius: 30px;
	}
	
	.to-register{
		text-align: center;
		margin-top: 20px;
	}
</style>