<template>
	<view class="swiper-container">
		<swiper class="swiper" :current="currentIndex" :autoplay="false" interval="9000" circular indicator-dots
			@change="handleSwiperChange">
			<block v-for="(item, index) in swiperList" :key="index">
				<swiper-item>
					<image class="swiper-image" :src="item.image"></image>
				</swiper-item>
			</block>
		</swiper>
		<view v-if="currentIndex > 0" class="arrow arrow-left" @tap="prev">
			<view style="text-align: center; margin-top: 18px;">返回</view>
		</view>
		<view v-if="currentIndex < 3" class="arrow arrow-right" @tap="next">
			<view style="text-align: center; margin-top: 18px;">继续</view>
		</view>
		<view v-if="currentIndex > 2" class="arrow arrow-right">
			<view style="text-align: center; margin-top: 18px;">
				<view style="text-align: center; margin-top: 18px;" @click="startClick">开始</view>
			</view>
		</view>


		<!-- <swiper>
			<block v-for="(item, index) in textList" :key="index">
				<swiper-item>
					<view>{{ item.title }}</view>
					<view>{{ item.content }}</view>
				</swiper-item>
			</block>
		</swiper> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// textList: [{
				// 		title: '欢迎使用DataSwap',
				// 		content: '无需使用代码或设计技能，我们的目标是让每个人都能创建漂亮的图表、地图和表格。'
				// 	},
				// 	{
				// 		title: '1',
				// 		content: '1',
				// 	},
				// 	{
				// 		title: '23',
				// 		content: '3',
				// 	},
				// 	{
				// 		title: '4',
				// 		content: '2',
				// 	},
				// ]
				swiperList: [{
						image: "/static/guide/guide11.png"
					},
					{
						image: "/static/guide/guide22.png"
					},
					{
						image: "/static/guide/guide33.png"
					},
					{
						image: "/static/guide/guide44.png"
					},
				],
				currentIndex: 0,
			};
		},
		methods: {
			handleSwiperChange(event) {
				const current = event.detail.current;
				this.currentIndex = current;
				// console.log("当前轮播到第", current, "个索引");
			},
			prev() {
				this.currentIndex = (this.currentIndex - 1 + this.swiperList.length) % this.swiperList.length;
			},
			next() {
				this.currentIndex = (this.currentIndex + 1) % this.swiperList.length;
			},

			startClick() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
		},
	};
</script>


<style>
	.swiper-container {
		position: relative;
	}

	.swiper {
		height: 650px;

	}

	.swiper-image {
		width: 100%;
		height: 100%;
	}

	.arrow {
		position: absolute;
		top: 93%;
		transform: translateY(-30%);
		width: 60px;
		height: 60px;
		background-color: lightgreen;
		;
		opacity: 0.8;
		border-radius: 50%;
	}

	.arrow-left {
		left: 40px;
	}

	.arrow-right {
		right: 40px;
	}
</style>