<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-top">
				<div class="footer-top__column">
					<a href="/" class="logo">MiniStore</a>
					<p class="text">Best information about the company gies here but now lorem ipsum is</p>
					<ul class="app-list">
						<li>
							<Icon name="mdi:twitter-circle" class="icon twitter" />
						</li>
						<li>
							<Icon name="meteor-icons:instagram" class="icon instagram" />
						</li>
						<li>
							<Icon name="ic:baseline-whatsapp" class="icon whatsapp" />
						</li>
						<li>
							<Icon name="material-symbols:youtube-tv" class="icon youtube" />
						</li>
						<li>
							<Icon name="ic:baseline-facebook" class="icon facebook" />
						</li>

					</ul>
				</div>
				<div class="footer-top__column about">
					<h3 class="title">About</h3>
					<p><a class="link" href="#">About Us</a></p>
					<p><a class="link" href="#">Find store</a></p>
					<p><a class="link" href="#">Categories</a></p>
					<p><a class="link" href="#">Blogs</a></p>
				</div>
				<div class="footer-top__column partnership">
					<h3 class="title">Partnership</h3>
					<p><a class="link" href="#">About Us</a></p>
					<p><a class="link" href="#">Find store</a></p>
					<p><a class="link" href="#">Categories</a></p>
					<p><a class="link" href="#">Blogs</a></p>
				</div>
				<div class="footer-top__column information">
					<h3 class="title">Information</h3>
					<p><a class="link" href="#">Help Center</a></p>
					<p><a class="link" href="#">Money Refund</a></p>
					<p><a class="link" href="#">Shipping</a></p>
					<p><a class="link" href="#">Contact us</a></p>
				</div>
				<div class="footer-top__column users">
					<h3 class="title">For users</h3>
					<p><a class="link" href="#">Login</a></p>
					<p><a class="link" href="#">Register</a></p>
					<p><a class="link" href="#">Settings</a></p>
					<p><a class="link" href="#">My Orders</a></p>
				</div>
			</div>
			<div class="footer-bottom">© 2026 Ecommerce</div>
		</div>
	</footer>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='scss'>
.footer {
	background-color: #fff;
}

.footer-top {
	margin-top: 40px;
	margin-bottom: 40px;

	@media (max-width: 767px) {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	display: flex;
	gap: 8px;

	&__column {
		flex: 0 0 20%;

		@media (max-width: 767px) {
			flex: 0 0 50%;
		}

		@media (max-width: 767px) {
			flex: 0 0 100%;
		}

		a.link {
			position: relative;

			&::after {
				content: "";
				position: absolute;
				left: 50%;
				width: 0;
				height: 1px;
				background-color: #9379c2;
				bottom: 0;
				transition: all 0.3s ease 0s;
			}

			&:hover {
				color: #9379c2;

				&::after {
					left: 0;
					width: 100%;
				}
			}
		}

	}


	@media (max-width: 767px) {

		.partnership,
		.information,
		.users {
			display: none;
		}
	}

	@media (max-width: 400px) {

		.about {
			display: none;
		}
	}
}

.logo {
	font-family: "Laila", sans-serif;
	font-size: 40px;
	user-select: none;

	@media (max-width: 767px) {
		font-size: 32px;
	}

}

.text {
	font-size: 16px;
	line-height: 150%;
	color: #505050;
	margin: 20px 0;
}

.app-list {
	display: flex;
	gap: 5px;
	align-items: center;
}

.title {
	line-height: 140%;
	margin-bottom: 20px;
}

.link {
	display: inline-block;
	font-size: 16px;
	line-height: 150%;
	color: #8b96a5;
	margin-bottom: 8px;
}

.footer-bottom {
	background-color: #f5f7fa;
	padding: 25px 0;
	text-align: center;
	color: #606060;
	font-size: 16px;
}

.icon {
	font-size: 30px;
	color: #888888;
	transition: color 0.3s ease;
	cursor: pointer;
}

.twitter:hover,
.facebook:hover {
	color: #1877F2;
}

.instagram:hover,
.youtube:hover {
	color: #ff2131;
}

.whatsapp:hover {
	color: #107c41
}

.animated-icon {
	font-size: 30px;
	color: #888888;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		color: #1877F2;
	}
}
</style>