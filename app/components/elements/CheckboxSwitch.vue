<template>
	<div class="switch-wrapper">
		<input
			:id="id"
			type="checkbox"
			:checked="modelValue"
			@change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
		<label :for="id" :class="{ 'is-checked': modelValue }">
			<span class="slider"></span>
			<span class="label-text">{{ name }}</span>
		</label>
	</div>
</template>

<script setup lang="ts">
const id = useId()

const props = defineProps<{
	name: string,
	modelValue: boolean
}>()

defineEmits<{
	'update:modelValue': [value: boolean]
}>()
</script>

<style scoped lang="scss">
.switch-wrapper {
	display: inline-flex;
	align-items: center;
}

input {
	display: none;
}

label {
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
	gap: 10px;
}

.slider {
	position: relative;
	display: inline-block;
	width: 44px;
	height: 24px;
	background-color: #ccc;
	border-radius: 24px;
	transition: background-color 0.3s ease;


	&::before {
		content: '';
		position: absolute;
		height: 18px;
		width: 18px;
		left: 3px;
		top: 3px;
		background-color: white;
		border-radius: 50%;
		transition: transform 0.3s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
}

.is-checked {
	.slider {
		background-color: #6750a4;

		&::before {
			transform: translateX(20px);
		}
	}
}

.label-text {
	font-size: 20px;
	color: #000;
}
</style>