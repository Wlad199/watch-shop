import type { User } from "~/types/user"

export const useAuthStore = defineStore('auth', () => {
	const token = useCookie('auth_token', {
		maxAge: 60 * 60 * 24 * 7,
		sameSite: 'lax'
	})

	const user = ref<User | null>(null)

	const isLoggedIn = computed(() => !!token.value)

	const login = async (credentials: User) => {
		try {
			const response = await $fetch<{ token: string }>('/api/login', {
				method: 'POST',
				body: credentials
			})
			if (response.token) {
				token.value = response.token
				await fetchUser()
			}
		} catch (err) {
			console.error(err)
			throw err
		}
	}

	const fetchUser = async () => {
		if (!token.value) return

		try {
			const userData = await $fetch<User>('/api/me', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token.value}`
				}
			})
			user.value = userData

		} catch (err) {
			console.error(err)
			logout()
		}
	}

	const logout = () => {
		token.value = null
		user.value = null
		navigateTo('/login')
	}

	return {
		token,
		user,
		isLoggedIn,
		login,
		logout,
		fetchUser
	}
})