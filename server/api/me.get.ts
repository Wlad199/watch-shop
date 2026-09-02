export default defineEventHandler(async (event) => {
	const authHeader = getRequestHeader(event, 'Authorization')

	if (!authHeader || !authHeader.startsWith('Bearer')) {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized: No token provided'
		})
	}
	const token = authHeader.split(' ')[1]

	if (token !== 'secret-valid-token') {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized: Invalid token',
		})
	}
	return {
		id: '1',
		name: 'Ivan Ivanov',
		email: 'ivan@example.com',
	}
})