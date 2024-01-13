<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-text="取消" @clickLeft="back" title="修改电子邮箱" />
		</view>
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
					url: '/pages/person/person/ModifyInformation'
				})
			},
		}
	}
</script>

<style>

</style>