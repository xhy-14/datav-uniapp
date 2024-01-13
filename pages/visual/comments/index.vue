<template>
	<view class="content">
		<form @submit="formSubmit(userInfo)" v-model="userInfo">
			<input type="text" v-model="userInfo.userName" placeholder="用户" />
			<input type="text" v-model="userInfo.password" password="" placeholder="密码" />
			<button type="primary" form-type="submit">登录</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					userName: '',
					password: ''
				}
			}
		},
		methods: {
			formSubmit(e) {
				console.log(e)
			}
		}
	}
</script>