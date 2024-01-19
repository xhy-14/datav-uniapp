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
				<uni-icons type="plusempty" size="25" @click="createNew"></uni-icons>
				<uni-popup ref="popup">
					<uni-popup-dialog title="新建文件夹">
						<view>
							<view style="display: flex;">
								<view>
									文件夹名:
								</view>
								<view>
									<input class="uni-input" />
								</view>
							</view>
							<br />
							<view>简介:</view>
							<view>
								<input class="uni-input" />
							</view>
						</view>
					</uni-popup-dialog>
				</uni-popup>
			</view>

			<view class="right-icon">
				<view :class="['select',SelectId.length==dataList.length?'selectActv':'']" @click="allFun()">
					<uni-icons type="list" size="25">
					</uni-icons>
				</view>
			</view>
		</view>
	</view>


	<image @tap="imageClick" src="/static/createFile.jpg"
		style="height: 40px; width: 40px;position: fixed; left:280px;top: 480px ">
	</image>

	<view>
		<view>
			<view class="selection-operate">
				<swiper class="sele-tab">
					<swiper-item :class="{ 'sele-active': index == tabCur }" v-for="(item, index) in tabList"
						:key="index" class="sele-item" @click="clickCtTab(index)">
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
		<view style="display: flex;">
			<view class="sort-selections">
				<uni-data-select v-model="value" :localdata="range" placeholder="请选择排序方式"></uni-data-select>
			</view>
			<view class="button-postion" v-if="this.SelectId.length>0">
				<button class="del-button">删除</button>
			</view>
			<view class="edit-postion" v-if="this.SelectId.length==1">
				<button class="edit-button">编辑</button>
			</view>
		</view>

		<view v-if="tabCur===0">
			<view class=" tl-section">
				<view class="CheckBox">
					<view class="CheckItem" v-if="value!==0 && value!==1" v-for="(item,index) in searchList"
						:key="index">
						<view @tap="gotoFile(item.id)">
							<image :src="defaultImg" class="tl-img-100"></image>
						</view>
						<view class="tl-center">
							<view @tap="gotoFile(item.id)">{{item.name}}</view>
							<view>{{item.times}}</view>
						</view>
						<view :class="['select',SelectId.includes(item.id)?'selectActv':'']"
							@click="selectFun(item.id)">
						</view>
					</view>

					<view class="CheckItem" v-if="value===1" v-for="item in sortByName" :key="item.name">
						<view @tap="gotoFile(item.id)">
							<image :src="defaultImg" class="tl-img-100"></image>
						</view>
						<view class="tl-center">
							<view @tap="gotoFile(item.id)">{{item.name}}</view>
							<view>{{item.times}}</view>
						</view>
						<view :class="['select',SelectId.includes(item.id)?'selectActv':'']"
							@click="selectFun(item.id)">
						</view>
					</view>

					<view class="CheckItem" v-if="value===0" v-for="item in sortByTime" :key="item.times">
						<view @tap="gotoFile(item.id)">
							<image :src="defaultImg" class="tl-img-100"></image>
						</view>
						<view class="tl-center">
							<view @tap="gotoFile(item.id)">{{item.name}}</view>
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
						text: "文件名"
					},
				],
				isChecked: false,
				defaultImg: '/static/file/files.jpg',
				keyword: '',
				SelectId: [],
				dataList: [{
						id: 0,
						name: '文件夹1',
						'times': '2019-06-06'
					},
					{
						id: 1,
						name: '我的12',
						'times': '2023-01-06'
					},
					{
						id: 2,
						name: '你的3',
						'times': '2012-02-06'

					},
					{
						id: 3,
						name: '文件夹7',
						'times': '2019-02-06'
					},
					{
						id: 4,
						name: '文件0',
						'times': '2019-06-06'
					},
					{
						id: 5,
						name: '文件夹2',
						'times': '2009-02-06'
					},
					{
						id: 6,
						name: '文件夹7',
						'times': '2019-02-07'
					},
				],

			}
		},
		computed: {
			searchList() {
				return this.dataList.filter(item => item.name.includes(this.keyword));
			},

			sortByName() {
				return this.dataList.sort((a, b) => {
					if (a.name < b.name) {
						return -1
					} else if (a.name > b.name) {
						return 1
					} else {
						return 0
					}
				})
			},

			sortByTime() {
				return this.sortKey(this.dataList, "times");
			},


		},
		props: {},
		methods: {
			back() {
				uni.reLaunch({
					url: '/pages/person/person/personCenter'
				})
			},

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
					this.SelectId.push(id)
				} else {
					let index = this.SelectId.indexOf(id)
					this.SelectId.splice(index, 1)
				}
			},

			allFun() {
				if (this.SelectId.length == this.dataList.length) {
					this.SelectId = [] // 判断是否已全部选中，是则清空已选列表
				} else {
					this.dataList.forEach((item) => {
						if (!this.SelectId.includes(item.id)) {
							this.SelectId.push(item.id)
						}
					})
				}
			},

			gotoFile(id) {
				uni.navigateTo({
					url: '/pages/person/person/singleFile/index?id=' + id
				})
			},

			createNew() {
				this.$refs.popup.open()
			},


			sortKey(array, key) {
				return array.sort(function(a, b) {
					var x = a[key];
					var y = b[key];
					return x > y ? -1 : x < y ? 1 : 0;
				});
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

	.edit-postion {
		padding-top: 13px;
		padding-left: 20px;
	}

	.edit-button {
		height: 30px;
		width: 60px;
		font-size: 10px;
		text-align: center;
		background-color: limegreen;
		color: whitesmoke;
	}

	.button-postion {
		padding-top: 13px;
		padding-left: 60px;
	}

	.del-button {
		height: 30px;
		width: 60px;
		font-size: 10px;
		text-align: center;
		background-color: indianred;
		color: whitesmoke;
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