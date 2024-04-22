import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const adrian = await prisma.user.upsert({
		where: { email: 'adrian@coffeemoms.com' },
		update: {},
		create: {
			id: '1234',
			email: 'adrian@coffeemoms.com',
			hashedPassword: '',
			phone: '1234567890',
			firstName: 'Adrian',
			lastName: 'Dunham',
		},
	});

	console.log({ adrian });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
