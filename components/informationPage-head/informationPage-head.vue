<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="个人信息" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				back(){
					uni.reLaunch({
						url: '/pages/person/person/personCenter'
					})
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
