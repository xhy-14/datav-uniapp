<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" @clickLeft="back" title="设置" />
		</view>
		<view>
			<uni-list>
				<uni-list-item showArrow title="清除缓存" 
				clickable @click="remove"/>
			</uni-list>
			<uni-list>
				<uni-list-item showArrow title="版本更新" 
				clickable @click="update"/>
			</uni-list>
			<uni-list>
				<uni-list-item showArrow title="注销账号" 
				clickable @click="cancel"/>
			</uni-list>
		</view>
		

		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="关闭" 
				confirmText="同意" title="通知" :content="content"  
				@confirm="dialogConfirm" @close="dialogClose"
				></uni-popup-dialog>
			</uni-popup>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '213123',
				msgType: 'success'
			}
		},
		methods: {
			remove(){
				this.messageToggle('success','是否清除缓存')
			},
			update(){
				this.messageToggle('success','更新')
			},
			cancel(){
				this.messageToggle('success','是否注销账号')
			},
			messageToggle(type, msg) {
				this.msgType = type
				this.content = `${msg}`
				console.log(this.content)
				this.$refs.alertDialog.open()
			}
		}
	}
	
</script>

<style>

</style>
