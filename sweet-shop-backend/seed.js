import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.sweet.createMany({
    data: [
      { name: 'Chocolate Bar', category: 'Chocolate', price: 50, quantity: 10 },
      { name: 'Gulab Jamun', category: 'Indian', price: 20, quantity: 15 },
      { name: 'Candy', category: 'Candy', price: 5, quantity: 50 }
    ],
    skipDuplicates: true
  });
}

main()
  .then(() => console.log('Sweets seeded successfully'))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
