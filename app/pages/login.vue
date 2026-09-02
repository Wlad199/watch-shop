<template>
	<div class="container">
		<div class="login-wrapper">
			<form @submit.prevent="submitForm" v-if="!authStore.isLogged">

				<div class="sign-in" v-if="isSignIn">
					<h2>Sign in</h2>
					<InputWithValidate class="inp" name="name" placeholder="Name" />
					<InputWithValidate name="password" placeholder="password" type="password" />
				</div>

				<div class="sign-up" v-else>
					<h2>Sign up</h2>
					<InputWithValidate name="name" placeholder="Name" />
					<InputWithValidate name="password" placeholder="password" type="password" />
					<InputWithValidate name="confirmPassword" placeholder="Confirm password" type="password" />
				</div>

				<ElementsButtonSimple type="submit" class="bottom">
					{{ isSignIn ? 'Sign in' : 'Sign up' }}
				</ElementsButtonSimple>

				<p class="line">or</p>

				<ElementsButtonSimple
					type="button"
					@click="isSignIn = !isSignIn"
					class="bottom switch">
					{{ isSignIn ? 'Sign up' : 'Sign in' }}
				</ElementsButtonSimple>
			</form>

			<div class="log-out" v-else>
				<Icon name="material-symbols:account-circle" class="user-icon" />
				<div class="name">{{ authStore.user?.name }}</div>
				<ElementsButtonSimple
					type="button"
					@click="authStore.logout"
					class="bottom">
					log out
				</ElementsButtonSimple>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import InputWithValidate from '~/components/elements/InputWithValidate.vue';

import * as z from 'zod'
import { toTypedSchema } from '#imports'
import { useForm } from 'vee-validate'

const authStore = useAuthStore()
const isSignIn = ref(true)

const schema = toTypedSchema(
	z.object({
		name: z.string().min(2, 'minimum 2 simbols'),
		password: z.string().min(6, 'minimum 6 simbols'),
		confirmPassword: z.string()
	}).refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don'l match",
		path: ['confirmPassword'],
	})
)

const { handleSubmit } = useForm({
	validationSchema: schema
})

const submitForm = handleSubmit(async (values) => {
	try {
		authStore.login(values.name, values.password)
		navigateTo('/')
	} catch (err) {
		console.error(err)
	}
})

watchEffect(() => {
	console.log(authStore.user)
})

</script>

<style scoped lang='scss'>
.container {
	display: flex;
	justify-content: center;
}

form {
	width: 100%;
}

.login-wrapper {
	width: 300px;
	margin-top: 50px;
	margin-bottom: 40px;
}

.sign-in {}

.sign-up {}

h2 {
	font-size: 26px;
	margin-bottom: 10px;
	text-align: center;
}

.bottom {
	width: 100%;
	margin-top: 30px;
	height: 50px;
	font-size: 24px;
	color: #fff;
}

.log-out {
	text-align: center;
}

.user-icon {
	font-size: 100px;
	color: #9b8bc7;
	display: block;
	margin: 0 auto;
	margin-bottom: 30px;
}

.name {
	display: inline-block;
	font-size: 20px;
	background-color: #fff;
	border: 1px solid #9b8bc7;
	border-radius: 5px;
	padding: 5px 10px;
}

.line {
	text-align: center;
	margin: 30px 0;
	font-size: 20px;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		top: 11px;
		right: 0;
		width: 40%;
		height: 1px;
		background-color: #9b8bc7;
	}

	&:after {
		content: '';
		position: absolute;
		top: 11px;
		left: 0;
		width: 40%;
		height: 1px;
		background-color: #9b8bc7;
	}
}

.switch {
	background-color: #6750a4;
	opacity: 0.6;
	border: 1px solid #6750a4;

	&:hover {
		opacity: 1;
	}
}
</style>