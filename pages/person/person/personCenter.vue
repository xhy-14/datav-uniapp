<template>
	<view class="index-container">
		<!-- 这里应该加一个v-if来判断是否登录，切换上面的内容 -->
		<view class="loginTop" v-if="isLogin">
			<!-- 这里要传值 -->
			<view class="username"><text >小可爱</text></view>
			<view class="uid"><text >uid:0000025</text></view>
		</view>
		<view class="noLoginTop" v-else>		
			<button type="primary" class="login-submit" @click="login">一键登录</button>
		</view>
		<!-- 常用功能应该要判断是否登录，不然就不让点击进去我的文档和个人信息 -->
		<view class="commonFunctionBox">
			<view class="box-title"><text>常用功能</text></view>
			<view class="box-main">
				<uni-grid :column="4" :showBorder="false" :highlight="false" @change="change">
					<uni-grid-item v-for="(item, index) in commonFunctionList" :index="index" :key="index">
						<view class="grid-item-box">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			
			<view class="box-second">
				<uni-list>
					<uni-list-item v-for="(item, index) in secondFunctionList" :title="item.title"  showArrow
						:thumb="item.url"
						thumb-size="sm"  
						clickable="true" @click="secondGoPath(item.src)"/>
				</uni-list>
			</view>
			<!-- 这里应该用v-if来判断是否登录后，显示退出登录的按钮 -->
			<view class="logout" v-if="isLogin" >
				<button type="warn">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 默认没有登陆，后期修改判断
				isLogin: false,
				// 每一个对应的路径后期都要改改
				commonFunctionList: [{
					url: '../../../static/personalCenter/document.png',
					text: '我的文档',
					src: '/pages/person/person/index',
				},
				{
					url: '../../../static/personalCenter/people-icon.png',
					text: '个人信息',
					src: '/pages/person/person/ModifyInformation',
				},
				{
					url: '../../../static/personalCenter/VIp-icon.png',
					text: '会员信息',
					src: '/pages/person/VipIndex/vipIndex',
				},
				{
					url: '../../../static/personalCenter/guidance.png',
					text: '用户指南',
					src: '/pages/user/register',
				},
				
				],
				secondFunctionList: [
					{
						title: '关于我们',
						url: '../../../static/personalCenter/aboutUs.png',
						src: '/pages/index/index'
					},
					{
						title: '意见反馈',
						url: '../../../static/personalCenter/feedback.png',
						src: '/pages/index/index'
					},
					{
						title: '设置',
						url: '../../../static/personalCenter/setting.png',
						src: '/pages/index/index'
					}
				]
			}
		},
		methods: {
			login(){
				uni.reLaunch({
					url: '/pages/user/login'
				})
			},
			change(e){
				let index = e.detail.index;
				let path = this.commonFunctionList[index].src;
				uni.reLaunch({
					url: path
				});
			},
			secondGoPath(path){
				uni.reLaunch({
					url: path
				})
			}
		}
	}
</script>

<style>
	body {
		background-color: rgba(249, 249, 249, 1);
	}
	.loginTop{
		display: flex;
		flex-direction: column;
		height: 200px;
		background-image: url("/static/personalCenter/loginedBackground.png");
	}
	.username{
		font-size: 24px;
		font-weight: 400;
		margin-top: 80px;
		margin-left: 20px;
	}
	.uid{
		color: rgba(0, 0, 0, 0.5);
		margin-top: 10px;
		margin-left: 20px;
	}
	.noLoginTop{
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url("../../../static/personalCenter/personBackground.png");
		height: 200px;
	}
	.login-submit{
		width: 160px;
		border-radius: 26px;
		box-shadow: 0px 4px 10px;

	}
	.commonFunctionBox{
		height: 140px;
		background-color: white;
	}
	.box-title{
		margin-left: 30px;
		padding-top: 15px;
		font-weight: bold;
	}
	.box-main{
		margin-top: 10px;
	}
	.box-second{
		margin-top: 20px;
	}
	.image{
		width: 25px;
		height: 25px;
	}
	.text {
		font-size: 14px;
		margin-top: 5px;
	}
	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
</style>
