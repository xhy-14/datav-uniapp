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
				<uni-search-bar v-model="keyword">
				</uni-search-bar>
			</view>

			<!-- 新建文件夹 -->
			<view class="right-icon">
				<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/">
					<uni-icons type="plusempty" size="25"></uni-icons>
				</uni-link>
			</view>

			<view class="right-icon">
				<view :class="['select',SelectId.length==dataList.length?'selectActv':'']" @click="allFun()">
					<uni-icons type="list" size="25">
					</uni-icons>
				</view>
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
		<uni-data-select v-model="value" :localdata="range" placeholder="请选择排序方式"></uni-data-select>
	</view>


	<image @tap="imageClick" src="/static/createFile.jpg"
		style="height: 40px; width: 40px;position: fixed; left:280px;top: 480px ">
	</image>

	<view>
		<view v-if="tabCur===0">
			<view class=" tl-section">
				<view class="CheckBox">
					<view class="CheckItem" v-for="(item,index) in searchList" :key="index">
						<view>
							<image :src="defaultImg" class="tl-img-100"></image>
						</view>
						<view class="tl-center">
							<view>{{item.name}}</view>
							<view>{{item.times}}</view>
						</view>
						<view :class="['select',SelectId.includes(item.id)?'selectActv':'']"
							@click="selectFun(item.id)">
						</view>
					</view>
				</view>
			</view>

		</view>
		<view v-if="tabCur===1">

		</view>
		<view v-if="tabCur===2">

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
				isChecked: false,
				defaultImg: '/static/file/files.jpg',
				keyword: '',
				SelectId: [],
				dataList: [{
						id: 0,
						name: '文件夹1',
						'times': '01'
					},
					{
						id: 1,
						name: '我的2',
						'times': '02'
					},
					{
						id: 2,
						name: '你的3',
						'times': '05'

					},
					{
						id: 3,
						name: '文件夹4',
						'times': '04'
					},
					{
						id: 4,
						name: '文件夹5',
						'times': '05'
					},
					{
						id: 5,
						name: '文件夹6',
						'times': '06'
					},
					{
						id: 6,
						name: '文件夹7',
						'times': '877'
					},
				],

			}
		},
		computed: {
			searchList() {
				return this.dataList.filter(item => item.name.includes(this.keyword));
			},
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

			selectFun(id) {
				if (!this.SelectId.includes(id)) {
					this.SelectId.push(id) // 判断已选列表中是否存在该id，不是则追加进去
				} else {
					let index = this.SelectId.indexOf(id) // 求出当前id的所在位置
					this.SelectId.splice(index, 1) // 否则则删除
				}
			},
			// 全选、反选
			allFun() {
				if (this.SelectId.length == this.dataList.length) {
					this.SelectId = [] // 判断是否已全部选中，是则清空已选列表
				} else {
					this.dataList.forEach((item) => {
						if (!this.SelectId.includes(item.id)) {
							this.SelectId.push(item.id) // 否则将未选中的全部加入已选列表中
						}
					})
				}
			},

		},

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

	.createImg {
		padding-top: 330px;
	}

	swiper-item {
		width: 170upx !important;
	}

	uni-image {
		height: 40px;
	}

	.sele-tab-item {
		padding-left: 25px;
	}

	.sort-selections {
		padding-top: 10px;
		padding-left: 15px;
		width: 120px;

	}

	.CheckBox {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.CheckItem {
		display: flex;
		margin: 0px 30px 30px 0px;
		align-items: center;
	}

	.select {
		width: 20px;
		height: 20px;
		border-radius: 2px;
		border: 1px solid #ccc;
		display: flex;
		justify-content: center;
		cursor: pointer;
		margin-right: 10px;
		align-items: center;
	}

	.selectActv::before {
		display: block;
		content: "";
		width: 5px;
		height: 12px;
		border-bottom: 2px solid #aaa;
		border-right: 2px solid #aaa;
		transform: rotate(45deg);
	}

	.selectAll {
		display: flex;
	}

	.content {
		width: 500px;
		margin: 120px auto;
	}

	.tl-section {
		padding-left: 15px;
	}

	.tl-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		height: 160rpx;
	}

	.tl-img-100 {
		width: 100rpx;
		height: 100rpx;
		background: #C1BFBF;
		border-radius: 50%;
	}

	.tl-center {
		width: 420rpx;
		margin: 0 46rpx;
	}

	.tl-font-green {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #4DB046;
		margin-left: 16rpx;
	}
</style>