<template>
	<div class="checkbox-wrapper">
		<input
			:id="id"
			type="checkbox"
			:checked="modelValue"
			@change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)">
		<label
			:for="id"
			:class="{ _active: modelValue }">
			{{ name }}
		</label>
	</div>
</template>


<script setup lang='ts'>

const id = useId()

const props = defineProps<{
	name: string,
	modelValue: boolean
}>()

defineEmits<{
	'update:modelValue': [value: boolean]
}>()
</script>

<style scoped lang='scss'>
input {
	display: none;
}

label {
	margin-left: 30px;
	position: relative;
	cursor: pointer;
	user-select: none;

	&::before {
		position: absolute;
		content: '';
		height: 22px;
		width: 22px;
		top: 2px;
		left: -27px;
		border: 1px solid #c1c1c1;
		border-radius: 5px;
		transition: all 0.1s ease 0s;
	}

	&._active::before {
		background-color: #6750a4;
	}
}
</style>