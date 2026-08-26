<template>
	<!-- Используем обратные кавычки для динамического aria-label -->
	<div class="rating-container" :aria-label="`Rating: ${props.rating} out of 5`">
		<div class="stars-wrapper">
			<div
				v-for="index in 5"
				:key="index"
				class="star-slot">
				<!-- Фоновая серая звезда -->
				<span class="star empty">★</span>

				<!-- Цветная звезда -->
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
// 1. Сохраняем props целиком, чтобы сохранить реактивность
const props = defineProps<{
	rating: number;
}>();

// 2. Функция теперь обращается к props.rating
function calculateWidth(starIndex: number): string {
	const rating = props.rating;

	// 1. Если рейтинг полностью покрывает эту звезду
	if (rating >= starIndex) {
		return '100%';
	}

	// 2. Если рейтинг "застрял" на этой звезде (дробная часть)
	if (rating > starIndex - 1) {
		const fraction = rating - (starIndex - 1);
		return `${fraction * 100}%`;
	}

	// 3. Если рейтинг меньше текущей звезды
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