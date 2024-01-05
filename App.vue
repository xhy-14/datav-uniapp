<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// const value = uni.getStorageSync('launchFlag');
			// if (value) {
			// 	// 如何已经有，直接去首页
			// 	uni.switchTab({
			// 		url: '/pages/index/index'
			// 	});
			// } else {
			// 	// 没有值，跳到引导页，并存储，下次打开就不会进去引导页
			// 	uni.setStorage({
			// 		key: 'launchFlag',
			// 		data: true
			// 	});
			// 	uni.redirectTo({
			// 		url: '/pages/index/guide'
			// 	});
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
