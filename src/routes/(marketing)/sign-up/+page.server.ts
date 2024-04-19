import { fail, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import prisma from '$lib/prisma';

import type { Actions } from './$types';
import { isValidEmail } from '../../../helpers/helpers';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		console.log({ password, email });

		if (
			!email ||
			typeof email !== 'string' ||
			email.length < 3 ||
			email.length > 255 ||
			!isValidEmail(email)
		) {
			return fail(400, {
				message: 'Invalid email',
			});
		}

		if (!password || typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password',
			});
		}

		const userId = generateId(15);
		const hashedPassword = await new Argon2id().hash(password);

		// TODO: check if username is already used
		await prisma.user.create({
			data: {
				id: userId,
				email: email,
				password,
				hashedPassword,
				phone: '',
				profile: {
					create: {
						firstName: '',
						lastName: '',
					},
				},
			},
		});

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes,
		});

		redirect(302, '/dashboard');
	},
};
