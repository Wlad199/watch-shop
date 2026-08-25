<template>
	<div class="wrapper">
		<Header :class="{ _scroll: isScrolled }" />

		<main class="content">
			<NuxtPage />
		</main>

		<Footer />
	</div>

</template>


<script setup lang='ts'>
const isScrolled = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 30
}
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang='scss'>
.content {
	margin-top: 70px;

	@media (max-width: 767px) {
		margin-top: 50px;
	}
}

.container {
	background-color: #f5f7fa;
}
</style>