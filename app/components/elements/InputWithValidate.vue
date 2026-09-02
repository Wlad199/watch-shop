<template>
	<div class="form-group">
		<label v-if="label">{{ label }}</label>

		<input
			:type="type || 'text'"
			:value="value"
			:placeholder="placeholder"
			:class="{ 'invalid': !!errorMessage }"
			@input="handleChange"
			@blur="handleBlur">

		<span v-if="errorMessage" class="form-invalid">
			{{ errorMessage }}
		</span>

	</div>
</template>

<script setup lang='ts'>

const props = defineProps<{
	name: string,
	label?: string,
	placeholder?: string,
	type?: string
}>()

const {
	value,
	errorMessage,
	handleChange,
	handleBlur
} = useField(() => props.name)

</script>

<style scoped lang='scss'>
.form-group {
	width: 100%;
}

label {
	display: block;
	margin-bottom: 5px;
}

input {
	outline: 1px solid #000;
	height: 40px;
	border-radius: 5px;
	outline: 1px solid #939393;
	padding: 0 10px;
	margin-top: 30px;
	width: 100%;

	&.invalid {
		outline: 1px solid red;
	}
}

input:focus {
	outline: 1px solid #04ab6c;

	&.invalid {
		outline: 1px solid red;
	}
}

span.form-invalid {
	color: red;
	display: block;
	margin-top: 5px;
}
</style>