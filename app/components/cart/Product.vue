<template>
	<li class="product">
		<div class="product__image">
			<NuxtImg src="/img/products/05.webp" />
		</div>
		<div class="product__description">
			<h3 class="description__title">Casio Wrist Watch Quartz</h3>
			<div class="description__brand">Casio</div>
			<div class="description__action">
				<div class="description__like">
					<Icon name="material-symbols:favorite-rounded" class="icon like" />
				</div>
				<div class="description__delete">
					<Icon name="ic:baseline-delete-forever" class="icon delete" />
				</div>
			</div>
		</div>
		<div class="product__price">
			<div class="price__current">$ 66.4</div>
			<div class="price__old">$ 144.5</div>
		</div>
		<div class="product__quantity">
			<div class="count">
				<span>
					<Icon name="ic:outline-minus" class="icon" />
				</span>
				<span>2</span>
				<span>
					<Icon name="material-symbols:add-2" class="icon" />
				</span>
			</div>
			<p class="count-limit">Limited quantity</p>
		</div>
	</li>
</template>

<script setup lang='ts'></script>

<style scoped lang='scss'>
.product {
	display: flex;
	gap: 10px;
	//justify-content: space-between;
	background-color: #fff;
	padding: 15px;
	margin-bottom: 5px;
	border-radius: 10px;

	@media (max-width: 600px) {
		gap: 5px;
		padding: 5px;
	}

	&__image {
		position: relative;
		flex: 0 0 80px;
		height: 115px;

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	&__description {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
	}

	&__price {
		flex: 0 0 130px;

		@media (max-width: 600px) {
			flex: 0 0 80px;
		}
	}

	&__quantity {}
}

.description {

	&__title {
		font-size: 20px;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 130%;

		@media (max-width: 1100px) {
			font-size: 16px;
		}

		@media (max-width: 600px) {
			font-size: 14px;
		}
	}

	&__brand {
		color: #a5aabe;
		font-size: 18px;
		flex: 1 1 auto;

		@media (max-width: 600px) {
			font-size: 14px;
		}
	}

	&__action {
		display: flex;
		gap: 10px;

		.icon {
			font-size: 30px;
			cursor: pointer;
			transition: all 0.2s ease 0s;
			color: #aaaaaa;

			@media (max-width: 600px) {
				font-size: 25px;
			}

			&:hover {
				color: red;
			}
		}
	}
}


.price {

	&__current {
		font-size: 26px;
		font-weight: 600;
		color: #f1117e;
		margin-bottom: 10px;
		padding-top: 5px;

		@media (max-width: 600px) {
			font-size: 16px;
		}
	}

	&__old {
		color: #aaaaaa;

		@media (max-width: 600px) {}
	}
}

.count {
	background-color: #f5f7fa;
	height: 40px;
	min-width: 100px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;

	@media (max-width: 600px) {
		min-width: 60px;
	}

	.icon {
		font-size: 25px;
		cursor: pointer;
		transition: all 0.2s ease 0s;

		@media (max-width: 600px) {
			font-size: 18px;
		}

		&:hover {
			background-color: #f1117e;
		}
	}

	span {
		font-size: 22px;
		padding: 0 5px;

		@media (max-width: 600px) {
			font-size: 18px;
		}
	}
}

.count-limit {
	color: #f1117e;
	font-size: 12px;
	line-height: 130%;

	@media (max-width: 600px) {
		font-size: 10px;
	}
}
</style>