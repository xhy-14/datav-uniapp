<template>
	<view class="custom-navigation-bar" style="background-color: whitesmoke;">
		<view class="left-button" @click="back">
			<uni-icons type="back" size="25"></uni-icons>
		</view>
		<view class="title">
		</view>
		<view class="right">
			<!-- <view class="right-icon" @tap="toggle('center')">
				<uni-icons type="search" size="25"></uni-icons>
			</view> -->
			<view class="right-icon">
				<uni-search-bar @confirm="search" :focus="true" v-model="keyword" @blur="blur" @focus="focus"
					@input="input" @clear="clear" @cancel="cancel">
				</uni-search-bar>
			</view>

			<!-- 新建文件夹 -->
			<view class="right-icon">
				<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/">
					<uni-icons type="plusempty" size="25"></uni-icons>
				</uni-link>
			</view>

			<view class="right-icon">
				<uni-icons type="list" size="25"></uni-icons>
			</view>
		</view>
	</view>

	<view>
		<view class="selection-operate">
			<swiper class="sele-tab">
				<swiper-item :class="{ 'sele-active': index == tabCur }" v-for="(item, index) in tabList" :key="index"
					class="sele-item" @click="clickCtTab(index)">
					<text v-text="item.title" class="sele-tab-item"></text>
				</swiper-item>
			</swiper>
			<view v-if="tabCur===0">
			</view>
			<view v-if="tabCur===1">
			</view>
			<view v-if="tabCur===2">
			</view>
		</view>
	</view>


	<view class="sort-selections">
		<uni-data-select v-model="value" :localdata="range" @change="change" placeholder="请选择排序方式"></uni-data-select>
	</view>

	<view>
		<view class="createFile">
			<image @tap="imageClick" src="/static/createFile.jpg" style="height: 40px; width: 40px;">
			</image>
			<!-- 跳转失败 -->
		</view>

		<view v-if="tabCur===0">
			<ul>
				<li v-for="item in searchList" :key="item">{{item}}</li>
			</ul>
		</view>
		<view v-if="tabCur===1">
			<ul>
				<li v-for="item in searchList" :key="item">{{item}}</li>
			</ul>
		</view>
		<view v-if="tabCur===2">
			<ul>
				<li v-for="item in searchList" :key="item">{{item}}</li>
			</ul>
		</view>
	</view>
	<!-- 	<uni-popup ref="popcenter">
		<view class="pop">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus"
				@input="input" @clear="clear" @cancel="cancel">
			</uni-search-bar>
		</view>
	</uni-popup> -->
	<!-- 搜索弹出 -->
</template>

<script>
	export default {
		data() {
			return {
				tabCur: 0,
				tabList: [{
					title: '我的文件夹',
				}, {
					title: '最近编辑',
				}, {
					title: '最近导出',
				}],
				value: null,
				range: [{
						value: 0,
						text: "创建时间"
					},
					{
						value: 1,
						text: "发布时间"
					},
					{
						value: 2,
						text: "文件名"
					},
					{
						value: 3,
						text: "状态"
					},
				],
				keyword: '',
				dataList: ['黑猫', '黑狗', '小猪', '小🐏'],
			}
		},
		computed: {
			searchList() {
				return this.dataList.filter(item => item.includes(this.keyword));
			}
		},
		props: {},
		methods: {
			back() {
				uni.reLaunch({
					url: '/pages/person/person/personCenter'
				})
			},
			// toggle() {
			// 	this.$refs['popcenter'].open();
			// },
			clickCtTab(ctCur) {
				this.tabCur = ctCur
			},

			imageClick() {
				uni.reLaunch({
					url: '/pages/visual/create/index'
				})
			},
		}
	}
</script>

<style>
	.custom-navigation-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 44px;
	}

	.left-button,
	.right {
		display: flex;
		align-items: center;
		padding: 0 12px;
	}

	.right-icon {
		padding-right: 13px;
	}

	.selection-operate {
		display: flex;
		padding-top: 10px;
	}

	.sele-tab {
		height: 50px;
		margin-left: 20px;
		padding: 0;
		font-size: 26upx;
		font-weight: bold;
		color: #c0c8d0;
		white-space: nowrap;
		display: flex;
		overflow: hidden;
	}

	.sele-item {
		padding: 10px 18px;
		display: inline-block;
	}

	.sele-item text {
		padding: 5px 0;
	}

	.sele-active {
		color: #007AFF;
	}

	.sele-active text {
		border-bottom: 2px solid #007AFF;
	}

	swiper {
		width: 100%;
	}

	swiper-item {
		width: 170upx !important;
	}

	.sele-tab-item {
		padding-left: 25px;
	}

	.sort-selections {
		padding-left: 15px;
		width: 120px;

	}

	.createFile {
		position: absolute;
		padding: 330px 100px 0 280px;

	}
</style>