<template>
	<div class="aside">
		<div class="parameter-wrapper">
			<div class="parameter">
				<h3 class="title">Price</h3>
				<div class="input-wrapper">
					<input
						type="number"
						placeholder="0"
						v-model="minPrice"
						step="10"
						min="0"
						:max="+maxPrice"
						@change="(e) => updateFilter('minPrice', (e.target as HTMLInputElement).value)">
					<input
						type="number"
						placeholder="∞"
						v-model="maxPrice"
						step="10"
						:min="+minPrice"
						@change="(e) => updateFilter('maxPrice', (e.target as HTMLInputElement).value)">
				</div>
			</div>
			<div class="parameter">
				<h3 class="title">Type</h3>
				<CheckboxSimple
					class="checkbox"
					v-for="t in types" :key="t"
					:name="t"
					:modelValue="isTypeSelected(t)"
					@update:modelValue="(val) => updateArrayFilter('type', t, val)" />
			</div>
			<div class="parameter">
				<h3 class="title">Brands</h3>
				<CheckboxSimple
					class="checkbox"
					v-for="b in brands" :key="b"
					:name="b"
					:modelValue="isBrandSelected(b)"
					@update:modelValue="(val) => updateArrayFilter('brand', b, val)" />
			</div>
			<div class="parameter">
				<CheckboxSwitch
					v-for="filter in switchFilters"
					:key="filter.key"
					:name="filter.label"
					:modelValue="isFilterActive(filter.key)"
					@update:modelValue="(val) => toggleFilter(filter.key, val)"
					class="checkbox" />
			</div>
		</div>
		<button @click="$emit('update-aside')" class="close-aside">Close</button>
	</div>
</template>

<script setup lang='ts'>
import CheckboxSimple from './elements/CheckboxSimple.vue';
import CheckboxSwitch from './elements/CheckboxSwitch.vue';
const { updateArrayFilter, updateFilter, toggleFilter } = useProductFilters();

const emit = defineEmits(['update-aside'])
const route = useRoute()

// Max/Min price filter
const minPrice = ref(route.query.minPrice || '')
const maxPrice = ref(route.query.maxPrice || '')

// type filter (mechanical / digital)
const types = ref(['mechanical', 'digital']);
const isTypeSelected = (type: string) => {
	const t = route.query.type;
	return Array.isArray(t) ? t.includes(type) : t === type;
}

// Brand filter
const brands = ref(['Casio', 'Rolex', 'Seico', 'Vostok', 'Omega'])
const isBrandSelected = (brand: string) => {
	const b = route.query.brand
	return Array.isArray(b) ? b.includes(brand) : b === brand
}

// Other filters: Water resist, rating, discount
const switchFilters = [
	{ key: 'waterResist', label: 'Water resistance' },
	{ key: 'highRating', label: 'High rating' },
	{ key: 'discounts', label: 'Discounts' }
]
const isFilterActive = (key: string) => route.query[key] === 'true'
</script>

<style scoped lang='scss'>
$primary-color: #6750a4;

.aside {
	flex: 0 0 260px;
	background-color: #fff;
	border-radius: 15px;
	padding: 5px;
	padding-top: 20px;
	padding-bottom: 20px;
	//margin: 20px 0;
	align-self: start;
	position: sticky;
	top: 60px;
	overflow-y: auto;
	margin-bottom: 20px;

	@media (max-width: 992px) {
		position: absolute;
		z-index: 2;
		width: 260px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
		left: -300px;
		transition: all 0.2s ease 0s;
	}
}

.close-aside {
	display: none;

	@media (max-width: 992px) {
		display: block;
		background-color: #c72007;
		height: 40px;
		width: 100%;
		border-radius: 8px;
		color: #fff;
		font-size: 18px;
		transition: all 0.2s ease 0s;
		margin-top: 20px;

		&:hover {
			background-color: #a01906;
		}
	}

	@media (max-width: 767px) {
		margin-bottom: 10px;
	}
}

.aside._active {
	@media (max-width: 992px) {
		left: 10px;
	}
}

.parameter:not(:last-child) {
	margin-bottom: 35px;
}

.title {
	font-size: 24px;
	line-height: 130%;
	margin-bottom: 15px;
}

.input-wrapper {
	display: flex;
	gap: 10px;

	input {
		height: 40px;
		border-radius: 5px;
		width: 120px;
		padding: 5px;
		outline: 1px solid #c1c1c1;

		&:focus {
			outline: 1px solid $primary-color;
		}
	}
}

.checkbox {
	margin-bottom: 10px;
	font-size: 20px;
}
</style>