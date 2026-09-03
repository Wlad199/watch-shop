// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/fonts',
		'@nuxt/image',
		'@pinia/nuxt',
		'@nuxt/icon',
		'@vee-validate/nuxt',
		'@vueuse/nuxt',
	],
	//css: ['./app/assets/null.scss', './app/assets/style.scss'],
	css: ['~/assets/null.scss', '~/assets/style.scss'],
	vite: {
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
				'@vee-validate/zod',
				'zod',
			]
		}
	},
	app: {
		head: {
			title: 'Template Nuxt4',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'This project on Nuxt4' }
			],
		}
	},
	image: {
		//quality: 80
	},
	plugins: [
		//'~/plugins/auth.ts'
	]
})