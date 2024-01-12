<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="关于我们" />
		</view>	
		<view class="firmDetail">
			<view style="text-align: center;font-size: 16px;">公司信息</view>
			<view class="details" v-for="(item,index) in firmDetails">
				<view>{{item.title}}: {{item.detail}}</view>
			</view>
		</view>
		<view class="firmDetail">
			<view style="text-align: center;font-size: 16px;">产品信息</view>
			<view class="details" v-for="(item,index) in productDetails">
				<view>{{item.title}}: {{item.detail}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				firmDetails: [{
					title: '公司名称',
					detail: '小可爱'
				},
				{
					title: '公司地址',
					detail: '博学楼'
				},
				{
					title: '公司介绍',
					detail: '小可爱'
				},
				{
					title: '联系电话',
					detail: '12345678911'
				}
				],
				
				productDetails :[{
					title: '产品名称',
					detail: 'Dataswap数据可视化平台'
				},
				{
					title: '发布时间',
					detail: '2024-01-28'
				},
				{
					title: '产品编号',
					detail: '123456'
				},
				{
					title: '产品版本号',
					detail: '1.0'
				},
				{
					title: '更新时间',
					detail: '2024-01-25'
				}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.firmDetail{
		width: 80%;
		margin: 20px auto;
		
		height: 200px;
		box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.25);
		
	}
	.details{
		margin: 5px 5px;
	}
</style>
