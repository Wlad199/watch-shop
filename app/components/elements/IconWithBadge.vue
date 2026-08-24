<template>
	<div class="icon-wrapper">
		<slot />
		<div class="badge">5</div>
	</div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='scss'>
.icon-wrapper {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	.badge {
		position: absolute;
		top: -2px;
		right: -5px;
		background-color: #ff4d4f;
		color: white;
		border-radius: 10px;
		padding: 0 4px;
		min-width: 16px;
		height: 16px;
		font-size: 10px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		pointer-events: none;
	}
}
</style>