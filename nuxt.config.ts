// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/fonts',
		'@nuxt/image',
		'@pinia/nuxt',
		'@nuxt/icon'
	],
	css: ['./app/assets/null.scss', './app/assets/style.scss'],
	vite: {
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
			]
		}
	}
})
