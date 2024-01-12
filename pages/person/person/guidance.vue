<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="用户指南" />
		</view>
		<view class="steps" v-for="(item,index) in stepList">
			<view class="step-left">
				<view class="num">{{item.num}}</view>
				<view class="content">
					<text>{{item.content}}</text>
				</view>
			</view>
			<view class="step-right">
				<image :src="item.src" style="width: 150px; height: 160px;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 这里的内容可以从数据库获取并修改
				stepList: [{
					num: '1',
					content: '描述文字xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
					src: '../../../static/guide/guide2.jpg'
				},
				{
					num: '2',
					content: '描述文字xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
					src: '../../../static/guide/guide3.jpg'
				},
				{
					num: '3',
					content: '描述文字xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
					src: '../../../static/guide/guide4.jpg'
				}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	body{
		background-color: rgba(249, 249, 249, 1);
	}
	.steps{
		width: 95%;
		height: 90%;
		margin: 5px 10px;
		display: flex;
	}
	.step-left{
		width: 160px;
	}
	.num{
		margin-top: 10px;
		margin-left: 50px;
		width: 40px;
		height: 40px;
		border: 1px solid black;
		border-radius: 50%;
		background-color: whitesmoke;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.content{
		margin-top: 10px;
		margin-left: 10px;
		width: 145px;
		height: 110px;
		box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.25);
		word-break: break-all;
		word-wrap: break-word;
		background-color: white;
	}
	.step-right{
		width: 150px;
		height: 160px;
		margin-top: 10px;
		margin-left: 20px;
	}
</style>
