import { writable } from 'svelte/store';
export const user = writable([
	{
		id: '123',
		email: 'test@example.com',
		password: 'secret',
	},
]);
export const create = (newUser) => {
	const userExist = find({ email: newUser.email });
	if (userExist) {
		return false;
	}
	user.update((u) => [...u, newUser]);
	return newUser;
};
export const remove = (id) => {
	user.update((u) => u.filter((u) => u.id !== id));
};
export const find = (obj) => {
	let existingUser;
	user.subscribe((value) => {
		if (value) {
			if (obj.email) {
				existingUser = value.find((item) => item.email === obj.email);
			} else {
				existingUser = value.find((item) => item.id === obj.id);
				console.log(value, obj);
			}
		}
	});
	return existingUser;
};
