<template>
	<div class="custom-select" tabindex="0" @blur="isOpen = false">
		<div class="select-header" @click="isOpen = !isOpen">
			{{ selectedLabel }}
			<span class="arrow" :class="{ open: isOpen }">▼</span>
		</div>

		<div v-if="isOpen" class="select-options">
			<div
				v-for="opt in options"
				:key="opt.value"
				class="option"
				@mousedown.prevent="selectOption(opt.value)">
				{{ opt.label }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	modelValue: string,
	options: { label: string, value: string }[]
}>()

const emit = defineEmits(['update:modelValue'])
const isOpen = ref(false)

const selectedLabel = computed(() =>
	props.options.find(o => o.value === props.modelValue)?.label
)

const selectOption = (value: string) => {
	emit('update:modelValue', value)
	isOpen.value = false
}

</script>

<style scoped>
.custom-select {
	position: relative;
	width: 300px;
	user-select: none;
	/*margin: 30px 0;*/
	background-color: #fff;
}

.select-header {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	background: var(--bg-color);
	transition: border 0.2s;
}

.arrow {
	font-size: 10px;
	transition: transform 0.3s;
}

.arrow.open {
	transform: rotate(180deg);
}

.select-options {
	position: absolute;
	top: 110%;
	left: 0;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 8px;
	background: white;
	z-index: 10;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.option {
	padding: 10px;
	cursor: pointer;
}

.option:hover {
	background: #f0f0f0;
}

.dark .select-options {
	background: #333;
}

.dark .option:hover {
	background: #444;
}
</style>