import jwt from 'jsonwebtoken'

const JWT_SECRET = 'super-secret-key-123'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const { name, password } = body

	//if (name !== 'admin' || password !== 'password123') {
	//	throw createError({
	//		statusCode: 401,
	//		statusMessage: 'Invalid credentials',
	//	})
	//}

	if (!name || !password) {
		throw createError({ statusCode: 401, statusMessage: 'Fields missing' });
	}

	const token = jwt.sign(
		{ id: 1, name: name },
		JWT_SECRET,
		{ expiresIn: '7d' }
	)

	return {
		token: token
	}
})