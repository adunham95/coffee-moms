import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { redirect, type Actions } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';
import { isValidEmail } from '$helpers/helpers';

export const load: PageServerLoad = async (event) => {
	console.log({ user: event.locals });
	if (!event.locals.user) redirect(302, '/login');

	const profile = await prisma.user.findFirst({ where: { id: event?.locals?.user?.id } });

	return {
		profile,
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const firstName = formData.get('first-name');
		const lastName = formData.get('last-name');
		const email = formData.get('email');
		const phone = formData.get('phone');
		const password = formData.get('password');

		let userData = {};

		if (firstName && typeof firstName == 'string') {
			userData = { ...userData, firstName };
		}

		if (lastName && typeof lastName == 'string') {
			userData = { ...userData, lastName };
		}

		if (
			email &&
			typeof email == 'string' &&
			email.length > 3 &&
			email.length < 255 &&
			isValidEmail(email)
		) {
			userData = { ...userData, email };
		}

		//TODO check is valid phone
		if (phone && typeof phone == 'string') {
			userData = { ...userData, phone };
		}

		if (password && typeof password === 'string') {
			const hashedPassword = await new Argon2id().hash(password);
			userData = { ...userData, hashedPassword };
		}

		console.log({ userData });

		const updatedUser = await prisma.user.update({
			where: { id: locals?.user?.id },
			data: userData,
		});

		console.log({ updatedUser });

		// redirect(200, '/profile');
	},
};
