import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const adrian = await prisma.user.upsert({
		where: { email: 'adrian@coffeemoms.com' },
		update: {},
		create: {
			email: 'adrian@coffeemoms.com',
			password: 'password',
			phone: '1234567890',
			profile: {
				create: {
					firstName: 'Adrian',
					lastName: 'Dunhams',
				},
			},
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
