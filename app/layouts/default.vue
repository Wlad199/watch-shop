<template>
	<div class="wrapper">
		<Header />

		<main class="content">
			<div class="container">
				<NuxtPage />
			</div>
		</main>

		<Footer />
	</div>

</template>


<script setup lang='ts'></script>

<style scoped lang='scss'>
.content {
	margin-top: 100px;
}

.container {
	background-color: #f5f7fa;
}
</style>