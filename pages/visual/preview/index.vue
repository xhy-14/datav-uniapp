<template>
	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="预览数据" @clickLeft="back" />
		<image class="upload-img" src="/static/visual/20.png"></image>
		<view class="data-input">
			<uni-table stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th v-for="item in tableData.headers" :key="item" width="150" align="center">
						{{item}}
					</uni-th>
				</uni-tr>
				<uni-tr v-for="item in tableData.rows" :key="item">
					<uni-td align="center" v-for="header in tableData.headers" :key="item[header]">{{ item[header] }}</uni-td>
				</uni-tr>
			</uni-table>
			
			<p>x轴</p>
			<uni-data-select v-model="xAxis" :localdata="options" @change="change"></uni-data-select>
			<p>y轴</p>
			<uni-data-select v-model="yAxis" :localdata="options" @change="change"></uni-data-select>
			<view class="back-next">
				<view class="back-location">
					<button type="default" class="back-button" @click="back">
						{{'<-'}} 返回
					</button>
				</view>
				<view class="next-location">
					<button type="default" class="next-button" @click="goto('/pages/visual/selectChart/index')">
						下一步 ->
					</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script lang="ts" setup>
	import { useChartStore } from '/store/chart';
	import { onMounted, ref, watch } from 'vue';
	import { lineApi } from '/api/chart/chart'

	// x轴
	const xAxis = ref("");
	// y轴
	const yAxis = ref("");
	let headers = null;
	let rows = null;
	const change = () => {

	}
	const back = () => {
		uni.reLaunch({
			url: '/pages/visual/create/index'
		})
	}

	let tableData = useChartStore().tableData
	let options = ref([]);
	onMounted(() => {
		tableData = useChartStore().tableData
		headers = tableData.headers
		rows = tableData.rows
		let opt = [];
		for (let i = 0; i < headers.length; i++) {
			let map = {};
			map["text"] = headers[i];
			map["value"] = headers[i];
			opt.push(map);
		}
		options.value = opt;
	})

	const goto = (url : any) => {
		if (xAxis.value != '' && yAxis.value != '') {
			uni.navigateTo({
				url: url
			})
		}
		else {
			uni.showToast({
				title: '请先选择x轴和y轴！',
				//将值设置为 success 或者直接不用写icon这个参数
				icon: 'error',
				//显示持续时间为 2秒
				duration: 2000
			})
		}
	}

	watch(
		[() => xAxis.value, () => yAxis.value],
		([newX, newY]) => {
			console.log(newX, newY)
			let selectData = [];
			for (let i = 0; i < rows.length; i++) {
				let map = {};
				map[newX] = rows[i][newX];
				map[newY] = rows[i][newY];
				selectData.push(map);
			}
			let parameter = {};
			parameter["headers"] = [newX, newY];
			parameter["rows"] = selectData;

			lineApi(parameter)
				.then(res => {
					if (res.code == "00000") {
						useChartStore().setOptions(res.data)
						console.log("opt store", useChartStore().options)
					}
				})
				.catch(err => { });

		}
	)
</script>

<style>
	.upload-img {
		width: 100%;
		height: 150px;
	}

	.data-input {
		width: 80%;
		height: 30px;
		padding: 50px 50px 50px 50px;
	}

	.back-next {
		display: flex;
		margin-top: 20px;
		
	}


	.back-location {
		width: 100px;
		top: 95px;
		left: 50px;
	}

	.back-button {
		background-color: white;
		color: black;
		width: 100px;
		font-size: 13px;
	}

	.next-location {
		top: 95px;
		left: 100px;
		margin-left: 100px;
	}

	.next-button {
		background-color: #43CF7C;
		color: white;
		width: 100px;
		font-size: 13px;
	}
</style>