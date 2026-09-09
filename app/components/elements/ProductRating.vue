<template>
	<div class="rating-container" :aria-label="`Rating: ${props.rating} out of 5`">
		<div class="stars-wrapper">
			<div
				v-for="index in 5"
				:key="index"
				class="star-slot">
				<span class="star empty">★</span>

				<span
					class="star filled"
					:style="{ width: calculateWidth(index) }">
					★
				</span>
			</div>
		</div>
		<span v-if="props.rating > 0" class="rating-value">{{ props.rating }}</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	rating: number;
}>();

function calculateWidth(starIndex: number): string {
	const rating = props.rating;

	if (rating >= starIndex) {
		return '100%';
	}

	if (rating > starIndex - 1) {
		const fraction = rating - (starIndex - 1);
		return `${fraction * 100}%`;
	}

	return '0%';
}
</script>

<style scoped>
.rating-container {
	display: inline-flex;
	align-items: center;
	gap: 8px;
}

.stars-wrapper {
	display: flex;
	position: relative;
}

.star-slot {
	position: relative;
	display: inline-block;
	font-size: 24px;
	line-height: 1;
}

.star {
	display: block;
}

.star.empty {
	color: #e0e0e0;
}

.star.filled {
	color: #ffc107;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	white-space: nowrap;
	transition: width 0.3s ease;
}

.rating-value {
	font-size: 16px;
}
</style>