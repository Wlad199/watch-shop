export default defineNuxtRouteMiddleware((to) => {
	const authStore = useAuthStore()
	if (!authStore.isLogged && to.path === '/cart') {
		return navigateTo('/login')
	}
})
