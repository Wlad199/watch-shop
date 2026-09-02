export default defineNuxtPlugin(async () => {
	const authStore = useAuthStore()
	if (authStore.token && !authStore.user) {
		await authStore.fetchUser()
	}
})