import type { User } from "~/types/user"

export const useAuthStore = defineStore('auth', () => {

	const user = useCookie<User | null>('auth_user', {
		maxAge: 60 * 60 * 24
	})

	const isLogged = computed(() => !!user.value)

	const login = (name: string, password: string) => {
		const savedUserData = localStorage.getItem('user-app')
		if (!savedUserData) throw new Error('User not found')

		const savedUser = JSON.parse(savedUserData)

		if (savedUser.name !== name || savedUser.password !== password) {
			throw new Error('Invalid name or password')
		}

		user.value = {
			id: savedUser.id,
			name: savedUser.name,
			password: savedUser.password
		}
		navigateTo('/')
		return
	}

	const register = (name: string, password: string) => {
		const savedUser = localStorage.getItem('user-app')
		if (savedUser) {
			const existingUser = JSON.parse(savedUser)
			if (existingUser.name === name) {
				throw new Error('A user with that name already exists.')
			}
		}

		const newUser = {
			id: crypto.randomUUID(),
			name: name,
			password: password
		}
		localStorage.setItem('user-app', JSON.stringify(newUser))
		user.value = {
			id: newUser.id,
			name: newUser.name,
			password: newUser.password
		}
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
		logout,
		register
	}
})
