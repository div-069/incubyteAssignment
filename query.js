import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // 1️⃣ List all users
  const users = await prisma.user.findMany();
  console.log("Users:", users);

  // 2️⃣ List all sweets
  const sweets = await prisma.sweet.findMany();
  console.log("Sweets:", sweets);

  // 3️⃣ Create an order
  const order = await prisma.order.create({
    data: {
      userId: users[0].id,
      total: 100,
    },
  });
  console.log("Order:", order);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
