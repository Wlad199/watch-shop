import type { User } from "~/types/user"

export const useAuthStore = defineStore('auth', () => {

	const user = useCookie<User | null>('auth_user', {
		maxAge: 60 * 60 * 24
	})

	const isLogged = computed(() => !!user.value)

	const login = (name: string, password: string) => {
		user.value = {
			id: crypto.randomUUID(),
			name: name,
			password: password
		}
		console.log(user.value)
		navigateTo('/')
	}

	const logout = () => {
		user.value = null
		navigateTo('/login')
	}
	return {
		user,
		isLogged,
		login,
		logout
	}
})