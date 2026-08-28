<template>
	<div class="wrapper">
		<div class="content">
			<h2>{{ error.status }}</h2>
			<p>{{ error.message || 'An unexpected error has occurred' }}</p>
			<NuxtLink to="/">Go to the main page</NuxtLink>
		</div>
	</div>
</template>

<script setup lang='ts'>
import type { NuxtError } from '#app';
const props = defineProps<{ error: NuxtError }>()
</script>

<style scoped lang='scss'>
.wrapper {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fdf2f4;
	font-family: sans-serif;
	text-align: center;
	padding: 20px;
}

.content {
	max-width: 500px;

	h2 {
		font-size: 40px;
		margin-bottom: 30px;
		color: #ff4d6d;
	}

	p {
		font-size: 18px;
		color: #333;
		margin-bottom: 30px;
	}

	a {
		display: inline-block;
		padding: 12px 24px;
		background-color: #ff4d6d;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: bold;
		transition: transform 0.2s, background-color 0.2s;

		&:hover {
			background-color: #e63955;
			transform: translateY(-2px);
		}
	}
}
</style>