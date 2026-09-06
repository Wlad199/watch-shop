<template>
	<nav aria-label="Breadcrumb" class="breadcrumbs">
		<ol class="breadcrumb-list">
			<!-- Ссылка на главную -->
			<li class="breadcrumb-item">
				<NuxtLink to="/">Shop</NuxtLink>
			</li>

			<li v-for="(crumb, index) in breadcrumbLinks" :key="index" class="breadcrumb-item">
				<span class="separator" aria-hidden="true">/</span>

				<!-- Если это последний элемент (текущая страница), делаем его некликабельным -->
				<template v-if="index === breadcrumbLinks.length - 1">
					<span class="breadcrumb-current">{{ crumb.label }}</span>
				</template>

				<template v-else>
					<NuxtLink :to="crumb.path">{{ crumb.label }}</NuxtLink>
				</template>
			</li>
		</ol>
	</nav>
</template>

<script setup lang="ts">
const route = useRoute();

// Вычисляемое свойство для генерации массива ссылок на основе URL
const breadcrumbLinks = computed(() => {
	const pathSegments = route.path.split('/').filter((segment) => segment && segment !== 'catalog')
	let cumulativePath = ''

	return pathSegments.map((segment) => {
		cumulativePath += `/${segment}`

		// Просто заменяем тире на пробелы и декодируем URL
		const label = decodeURIComponent(segment).replace(/-/g, ' ')

		return { label, path: cumulativePath }
	})
})
</script>

<style scoped>
.breadcrumbs {
	margin-top: 20px;
}

.breadcrumb-list {
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	flex-wrap: wrap;
}

.breadcrumb-item {
	display: flex;
	align-items: center;
	font-size: 16px;
}

.separator {
	margin: 0 8px;
	color: #999;
}

.breadcrumb-current {
	color: #666;
	font-weight: 600;
}

a {
	color: #6750a4;
	text-decoration: none;

	&:hover {
		color: #007bff;
	}
}
</style>