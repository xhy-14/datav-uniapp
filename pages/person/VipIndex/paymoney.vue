<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="支付" />
		</view>
		<!-- 从上一个页面传数据 -->
		<view class="payMoney"><text>支付金额</text></view>
		<view class="payMoney"><text>￥198</text></view>
		<view style="margin: 5px 20px;font-size: 12px; color: #666666;"><text>可选择性支付</text></view>
		<view class="selectBox">
			<view style="padding: 10px 10px;font-size: 15px;"><text>付款方式</text></view>
			<radio-group @change="radioChange" class="ways">
				<label class="way" v-for="(item, index) in items" :key="item.value">
					<image :src="item.src" style="width: 30px;height: 30px;"></image>
					<view>{{item.name}}</view>
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					
				</label>
			</radio-group>
			
		</view>
		<!-- 调用支付的接口 -->
		<button type="warn" @click="goBuy" style="width: 90%;">支付</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: 'wechat',
						name: '微信支付',
						checked: 'true',
						src: '../../../static/personalCenter/vip/wechat.png'
					},
					{
						value: 'zhifubao',
						name: '支付宝支付',
						src: '../../../static/personalCenter/vip/zhifubao.png'
						
					},
				],
				current: 1
			}
		},
		methods: {
			radioChange(e){
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === e.detail.value) {
                    this.current = i;
                    break;
                }
            }	
			console.log(this.current)
		},
		back(){
			uni.reLaunch({
				url: '/pages/person/VipIndex/vipIndex'
			})
		}
	}
}
</script>

<style>
	body{
		background-color: rgba(249, 249, 249, 1);;
	}
	.payMoney{
		margin: 10px auto;
		font-size: 20px;
		width: 300px;
		text-align: center;
	}
	.selectBox{
		margin: 5px 10px;
		height: 200px;
		width: %90;
		background-color: #FFF;
		border-radius: 5px;
	}
	.way{
		display: flex;
		justify-content: space-between;
		margin: 5px 10px;
	}
</style>
alCenter/vip/w