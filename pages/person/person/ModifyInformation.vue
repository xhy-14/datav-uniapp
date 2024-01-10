<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="个人信息" />
		</view>
		<view class="box-second">
			<uni-list>
				<!-- 这里的右侧文字信息要读取当前用户的内容 -->
				<uni-list-item v-for="(item, index) in informationList" :title="item.title" showArrow 
					link="reLaunch" :to="item.url" @click="onClick" 
					:right-text="item.information"/>

			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informationList: [
					{
						title: '昵称',
						url: '/pages/person/person/modifyUsername',
						information: '小可爱'
					},
					{
						title: '电子邮箱',
						url: '/pages/person/person/modifyEmail',
						information: '123456789@qq.com'
					},
					{
						title: '手机号',
						url: '/pages/person/person/modifyMobile',
						information: '12345678911'
					},
					{
						title: '修改密码',
						url: '/pages/person/person/modifyPassword'
					}
				]
			}
		},
		methods: {
			back(){
				uni.reLaunch({
					url: '/pages/person/person/personCenter'
				})
			}
		}
	}
</script>

<style>

</style>
