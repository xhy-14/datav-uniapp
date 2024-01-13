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
				<uni-icons type="list" size="25" @change="allChoose">
				</uni-icons>
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


	<view>
		<view>
			<image @tap="imageClick" src="/static/createFile.jpg"
				style="height: 40px; width: 40px;position: absolute; padding-left: 270px;padding-top: 330px ">
			</image>
		</view>
		<view v-if="tabCur===0">
			<view>
				<view class=" tl-section">
					<checkbox-group v-if="searchList" class="block" @change="changeCheckbox">
						<view v-for="item in searchList" :key="item.id" class="tl-row">
							<view>
								<image :src="defaultImg" class="tl-img-100"></image>
							</view>
							<view class="tl-center">
								<view>{{item.name}}</view>
								<view>{{item.times}}</view>
							</view>
							<view>
								<checkbox :id=" String(item.id)" :checked="checkedArr.includes(String(item.id))"
									:class="{'checked':checkedArr.includes(String(item.id))}">
								</checkbox>
							</view>
						</view>
					</checkbox-group>
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
				checkedArr: [], //复选框选中的值
				allChecked: false
			}
		},
		computed: {
			searchList() {
				return this.dataList.filter(item => item.name.includes(this.keyword));
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


			checkboxChange(e) {
				let id = e.detail.id;
				if (id[0] == 1) {
					this.isChecked = true;
				} else {
					this.isChecked = false;
				}
			},
			// 多选复选框改变事件
			changeCheckbox(e) {
				this.checkedArr = e.detail.id;
				// 如果选择的数组中有值，并且长度等于列表的长度，就是全选
				if (this.checkedArr.length > 0 && this.checkedArr.length == this.checkboxData.length) {
					this.allChecked = true;
				} else {
					this.allChecked = false;
				}
			},
			// 全选事件
			allChoose(e) {
				let chooseItem = e.detail.id;
				// 全选
				if (chooseItem[0] == 'all') {
					this.allChecked = true;
					for (let item of this.checkboxData) {
						let itemVal = String(item.id);
						if (!this.checkedArr.includes(itemVal)) {
							this.checkedArr.push(itemVal);
						}
					}
				} else {
					// 取消全选
					this.allChecked = false;
					this.checkedArr = [];
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


	.createImg {}

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

	.sele-tab-item {
		padding-left: 25px;
	}

	.sort-selections {
		padding-left: 15px;
		width: 120px;

	}

	.tl-section {
		padding-top: 15px;
		padding-left: 8px;
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