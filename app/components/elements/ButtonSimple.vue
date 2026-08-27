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
	background-color: #71aaff;
	padding: 10px 15px;
	border-radius: 5px;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: #287eff;
	}

	&:disabled {
		background-color: #c1daff;
		cursor: default;
	}
}
</style>