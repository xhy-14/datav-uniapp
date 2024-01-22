<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="会员中心" />
		</view>
		<!-- 判断登录与否 -->
		<view class="vipBackground" v-if="isLogin">
			<view class="userN"><text>您还没有登陆哦！快登录享受我们的功能吧!</text></view>
		</view>
		<view class="vipBackground" v-else>
			<!-- 这该插入用户的信息来展示,并判断是否登录 -->
			<view v-if="isVip">
				<view class="userN"><text>小可爱</text></view>
				<view class="userId"><text>id:0000012</text></view>
				<view class="vipMassage"><text>您还不是我们的会员，开通会员享更多权益</text></view>
			</view>
			<view v-else>
				<view class="userN"><text>小可爱</text></view>
				<view class="userId"><text>id:0000012</text></view>
				<view class="vipMassage"><text>会员到期时间：2024-5-5</text></view>
			</view>
		</view>
		<view class="moreFunction">
			<view class="moreFunctionText"><text>—— 会员特权 ——</text></view>
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
		</view>
		<uni-row class="vipMenu">
			<uni-col class="vipItem" v-for="(item, index) in menu" @click="getIndex(index)">
				<view class="itemName"><text>{{item.name}}</text></view>
				<view class="itemDiscount"><text>{{item.discount}}</text></view>
				<view class="itemOriginal"><text>{{item.original}}</text></view>
			</uni-col>
		</uni-row>
		<view class="rules">
			<text style="color: #B1B2B6;">详细规则</text>
			<view class="ruleTexts">
				<ul>
					<li v-for="(item,index) in ruleList">{{item.texts}}</li>
				</ul>
			</view>
		</view>
		<button type="primary" class="buyButton" @click="buy">立即开通</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isVip: false,
				isLogin: true,
				menuSelection: '',
				commonFunctionList: [{
					url: '../../../static/personalCenter/vip/vip-icon1.png',
					text: '我的文档',
				},
				{
					url: '../../../static/personalCenter/vip/vip-icon2.png',
					text: '个人信息',
				},
				{
					url: '../../../static/personalCenter/vip/vip-icon3.png',
					text: '会员信息',
				},
				{
					url: '../../../static/personalCenter/vip/vip-icon4.png',
					text: '用户指南'
				},
				
				],
				menu: [
					{
						name: '月卡',
						discount: '￥25',
						original: '￥30'
					},
					{
						name: '季卡',
						discount: '￥68',
						original: '￥90'
					},
					{
						name: '年卡',
						discount: '￥248',
						original: '￥360'
					}
				],
				ruleList: [
					{
						texts: '会员服务为虚拟商品，支付成功后不支持退款'
					},
					{
						texts: '付款：确认购买后可选择微信、支付宝或银联付款'
					},
					{
						texts: '取消续订：订阅期到期前24小时可取消下月续费'
					}
				]
			}
		},
		methods: {
			// 返回上一页
			back(){
				uni.reLaunch({
					url: '/pages/person/person/personCenter'
				})
			},
			// 获得使用的套餐，并到时候传入后台
			getIndex(e){
				this.menuSelection = e;
				console.log(this.menuSelection)
			}
		}
	}
</script>

<style>
	.vipBackground{
		display: flex;
		flex-direction: column;
		background-image: url('../../../static/personalCenter/vip/vip背景图.png');
		background-size: cover;
		height: 120px;
		margin-top: 5px;
		margin-left: 20px;
	}
	.userN{
		margin-top: 20px;
		margin-left: 20px;
		font-size: 20px;
		width: 290px;
	}
	.userId{
		font-size:14px ;
		margin-left: 20px;
		margin-top: 5px;
		color: #A6A6A6;
	}
	.vipMassage{
		font-size: 12px;
		margin-left: 20px;
		margin-top: 5px;
		color: #FFFFFF;
	}
	.moreFunction{
		height: 150px;
		background-color: #F1E8D7;
		background-size: cover;
		margin: 10px 20px;
		display: flex;
		flex-direction: column;
	}
	.moreFunctionText{
		margin: 5px auto;
		font-size: 16px;
		font-weight: bold;
	}
	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
	}
	.image{
		width: 40px;
		height: 40px;
	}
	.text{
		font-size: 14px;
		margin-top: 5px;
		color: #97999D;
	}
	.vipMenu{
		height: 160px;
		margin: 0px 20px;
		display: flex;
	}
	.vipItem{
		border: 1px solid #F1E8D7;
		width: 110px;
		margin: 5px 10px;
		border-radius: 10px;
	}
	.itemName{
		margin-top: 30px;
		margin-left: 10px;
	}
	.itemDiscount{
		margin-top: 10px;
		margin-left: 10px;
		font-size: 32px;
		color: #DDB05D;
	}
	.itemOriginal{
		margin-top: 10px;
		margin-left: 10px;
		font-size: 18px;
		color: #DDB05D;
		text-decoration: line-through;
	}
	.rules{
		margin-top: 5px;
		margin-left: 20px;
	}
	.ruleTexts{
		margin-left: -10px;
		margin-top: 10px;
		color: #B1B2B6;
		margin-right: 10px;
		font-size: 14px;
	}
	.buyButton{
		width: 130px;
		margin-top: 20px;
		margin-left: 200px;
		background-color: #DDB05D;
		border-radius: 20px;
	}
</style>