<template>
	<button
		:type="type"
		:disabled="disabled">
		<slot />
	</button>
</template>

<script setup lang='ts'>
interface Props {
	disabled?: boolean,
	type: 'button' | 'submit' | 'reset',
}

const { disabled, type } = defineProps<Props>()

</script>

<style scoped lang='scss'>
button {
	background-color: #745eb0;
	padding: 10px 15px;
	border-radius: 5px;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: #6750a4;
	}

	&:disabled {
		background-color: #b8acd7;
		cursor: default;
	}
}
</style>