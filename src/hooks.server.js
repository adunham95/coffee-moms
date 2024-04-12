import { redirect } from '@sveltejs/kit';
import { getUserById } from './store/db';
const unProtectedRoutes = ['/', '/sign-in', '/sign-up', '/about'];
export const handle = async ({ event, request, resolve }) => {
	if (unProtectedRoutes.includes(event.url.pathname)) {
		return resolve(event);
	}
	const sessionId = event.cookies.get('session_id');
	console.log('sessionId', sessionId);
	if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
		throw redirect(303, '/');
	}
	const userInfo = await getUserById(sessionId);
	const currentUser = userInfo;
	if (currentUser) {
		event.locals.user = {
			isAuthenticated: true,
			email: currentUser.email,
			id: currentUser.id,
		};
	} else {
		if (!unProtectedRoutes.includes(event.url.pathname)) {
			throw redirect(303, '/');
		}
	}
	const query = event.url.searchParams.get('signout');
	if (Boolean(query) == true) {
		await event.cookies.delete('session_id', { path: '/' });
	}
	return resolve(event);
};
