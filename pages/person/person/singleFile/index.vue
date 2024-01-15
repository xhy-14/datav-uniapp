<template>
	<view>id为:{{id}}</view>

</template>

<script>
	export default {
		onLoad(options) {
			this.id = options.id
		},
	}
</script>