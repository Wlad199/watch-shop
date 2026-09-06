<template>
	<Teleport to="body">
		<Transition name="fade">
			<div v-if="isOpen" class="popup" @click.self="closeModal">
				<div class="popup-body">

					<div class="content">
						<slot name="title">
							<h3 class="title">Title</h3>
						</slot>
						<slot name="body">
							<div class="text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, officia.
							</div>
						</slot>
					</div>

				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang='ts'>

const isOpen = computed(() => {
	return props.modelValue
})

const props = defineProps<{
	modelValue: boolean
}>()

const emit = defineEmits<{
	'update:modelValue': [boolean]
}>()

const closeModal = () => {
	emit('update:modelValue', false)
}

watch(
	() => props.modelValue,
	(newValue) => {
		if (newValue) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
	}
)

// Закрытие по нажатию на Esc
const handleEsc = (e: KeyboardEvent) => {
	if (e.key === 'Escape' && isOpen) {
		closeModal()
	}
}

onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))
onUnmounted(() => document.body.classList.remove('_lock'))

</script>

<style scoped lang='scss'>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	//background-color: rgba(#000, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(5px);
}

.popup-body {
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25)
}

.content {
	position: relative;
	background-color: #fff;
	color: #000;
	max-width: 800px;
	padding: 30px;
	border-radius: 10px;

	@media (max-width: 400px) {
		padding: 20px 10px;
	}
}

.close {
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 5px;
	height: 30px;

	&:hover svg {
		fill: red;
		transition: all 0.3s ease 0s;
	}

	svg {
		height: 25px;
		width: 25px;
	}

}

.title {
	font-size: 40px;
	margin-bottom: 40px;
	text-align: center;
	line-height: 130%;
}

.text {
	line-height: 130%;
}

.fade-enter-active,
.fade-leave-active {
	//transition: opacity 0.3s ease;
	transition: all 0.2s ease 0s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scale(0);
}
</style>