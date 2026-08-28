<template>
	<NuxtLink :to="path">
		<slot />
		<Icon name="ic:baseline-arrow-right-alt" style="width: 30px; height: 30px;" />
	</NuxtLink>
</template>

<script setup lang='ts'>
const props = defineProps<{
	path: string
}>()
</script>

<style scoped lang='scss'>
a {
	height: 50px;
	padding: 15px;
	background-color: #745eb0;
	border-radius: 5px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 20px;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #6750a4;

		span {
			transform: translateX(10px);
		}
	}
}

span {
	margin-left: 5px;
	transition: all 0.2s ease 0s;
}
</style>