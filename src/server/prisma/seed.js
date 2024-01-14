const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const seed = async () => {
    for (let i = 0; i < 20; i++) {
        const contact = await prisma.contact.create({
          data: {
            name: `Manager ${i + 1}`,
            email: `Manager@company${i + 1}.com`,
            company: `Company ${i + 1}`,
            phone: `555-555-555${i + 1}`,
            message: `I would like to speak with you about a role at company${i + 1}.`,
          },
        });
        console.log(`Created contact with ID ${contact.id}`);
      }
    
    };
    seed()
      .then(async () => await prisma.$disconnect())
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });