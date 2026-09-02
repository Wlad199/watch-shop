<template>
	<header class=" header">
		<div class="container">
			<div class="header-body">

				<a href="/" class="logo">WatchStore</a>

				<nav class="menu" :class="{ _active: isOpenMenu }">
					<ul class="list" @click="closeMenu">
						<li>
							<NuxtLink to="/">Shop</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/contacts">Contact Us</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/about">About</NuxtLink>
						</li>
					</ul>
				</nav>

				<div class="icons">
					<NuxtLink to="/login">
						<UserIcon height="1em" />
					</NuxtLink>
					<IconWithBadge>
						<HeartIcon height="1em" />
					</IconWithBadge>
					<NuxtLink to="/cart">
						<IconWithBadge>
							<Cart16RegularIcon height="1em" />
						</IconWithBadge>
					</NuxtLink>
				</div>
				<div @click="toggleMenu" class="burger" :class="{ _active: isOpenMenu }">
					<span></span>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang='ts'>
import UserIcon from '@iconify-vue/griddy-icons/user';
import HeartIcon from '@iconify-vue/griddy-icons/heart';
import IconWithBadge from './elements/IconWithBadge.vue';
import Cart16RegularIcon from '@iconify-vue/fluent/cart-16-regular';

const isOpenMenu = ref(false)

const toggleMenu = () => {
	isOpenMenu.value = !isOpenMenu.value
	document.body.classList.toggle('_lock')
}
const closeMenu = (e: MouseEvent) => {
	if ((e.target as HTMLElement).closest('li')) {
		isOpenMenu.value = false
		document.body.classList.remove('_lock')
	}
}

</script>

<style scoped lang='scss'>
$primary-color: #6750a4;

// Подсветка выбранной страницы
.router-link-active {
	color: $primary-color;
	position: relative;

	@media (min-width: 767px) {
		&:after {
			content: '';
			position: absolute;
			bottom: -20px;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: $primary-color;
		}
	}
}

// ======== //

.header {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 50;
	background-color: #fff;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
}

.header._scroll .header-body {
	height: 50px;
}

.header._scroll .router-link-active {
	@media (min-width: 767px) {
		&:after {
			bottom: -9px;
		}
	}
}

.header-body {
	position: relative;
	height: 70px;
	display: flex;
	align-items: center;
	z-index: 2;
	transition: height 0.2s ease 0s;

	@media (max-width: 767px) {
		height: 50px;
	}
}

.burger {
	display: none;
	cursor: pointer;

	@media (max-width: 767px) {
		display: block;
		position: relative;
		width: 30px;
		height: 20px;
		position: relative;
		z-index: 3;
		margin-left: 30px;

		&::before,
		&::after {
			content: '';
			background-color: $primary-color;
			position: absolute;
			width: 100%;
			height: 2px;
			left: 0;
			transition: all 0.2s ease 0s;
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}

		span {
			position: absolute;
			left: 0;
			width: 100%;
			height: 2px;
			top: 9px;
			background-color: $primary-color;
			transition: all 0.2s ease 0s;
		}

		&._active::before {
			transform: rotate(45deg);
			top: 9px;
		}

		&._active::after {
			transform: rotate(-45deg);
			bottom: 9px;
		}

		&._active span {
			transform: scale(0);
		}
	}
}

.menu {

	@media (max-width: 767px) {
		position: fixed;
		top: -110%;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #f5f7fa;
		padding-top: 70px;
		transition: all 0.2s ease 0s;
		overflow: auto;
		z-index: 1;

		&._active {
			top: 0;
		}
	}
}

.list {
	display: flex;
	gap: 20px;
	position: relative;
	z-index: 2;

	li {
		font-size: 28px;
		transition: all 0.2s ease 0s;
		height: 100%;

		@media (max-width: 992px) {
			font-size: 24px;
		}

		&:hover {
			color: $primary-color;
		}
	}

	@media (max-width: 767px) {
		display: block;

		li {
			margin: 20px 10px;
			text-align: center;
			font-size: 24px;
		}
	}
}

.logo {
	font-family: "Laila", sans-serif;
	font-size: 40px;
	margin-right: auto;
	user-select: none;

	@media (max-width: 992px) {
		font-size: 32px;
	}

	@media (max-width: 500px) {
		font-size: 24px;
	}
}

.icons {
	font-size: 30px;
	display: flex;
	align-items: center;
	gap: 20px;
	margin-left: 30px;
	cursor: pointer;

	svg:hover {
		color: $primary-color;
	}

	@media (max-width: 500px) {
		gap: 10px;
		margin-left: 10px;
		font-size: 25px;
	}
}
</style>