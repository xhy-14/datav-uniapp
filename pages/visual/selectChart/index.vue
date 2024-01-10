<template>

	<view class="box-bg">
		<uni-nav-bar shadow left-icon="left" title="选择图表类型" @clickLeft="back" />
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				uni.reLaunch({
					url: '/pages/visual/preview/index'
				})
			},
		}

	}
</script>