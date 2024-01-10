<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow  left-text="取消" @clickLeft="back" title="修改用户昵称" />
		</view>
			<uni-easyinput class="inputBox" trim="all" v-model="newUsername" 
			placeholder="请输入内容" placeholderStyle="color:#A6A6A6;font-size:16px"
			@input="input"></uni-easyinput>
			
			<text class="tip">这里写昵称的限制，即长度</text>
			
			<view class="submitButton">
				<button type="primary" @click="submit">保存</button>
			</view>
			
			<uni-popup  ref="editUsername" type="message">
				<uni-popup-message :type="msgType" :message="messageText" duration="2000"></uni-popup-message>
			</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newUsername: '',
				msgType: '',
				messageText: ''
				
			}
		},
		methods: {
			back(){
				uni.reLaunch({
					url: '/pages/person/person/ModifyInformation'
				})
			},
			// 连接接口，并进行提交前的判断，满足条件才给接口
			submit(){
				console.log(this.newUsername);
				if(this.newUsername === '' ){
					this.messageToggle("error","昵称不能为空")
					return
				}
				else if(this.newUsername != 11){
					this.messageToggle("error","输入的电话号码必须是11位长！")
					return
				}
				// 接下来再用接口判断
			},
			messageToggle(type, msg) {
				this.msgType = type
				this.messageText = `${msg}`
				console.log(this.messageText)
				this.$refs.editUsername.open()
			}
			
		}
	}
</script>

<style>
	.inputBox{
		margin-top: 50px;
		margin-left: 20px;
		width: 330px;
		height: 50px;
		
	}
	.tip{
		margin-left: 25px;
		font-size: 13px;
		color: #A6A6A6;
	}
	.submitButton{
		margin-top: 100px;
		margin-left: 20px;
		width: 330px;
	}
</style>
