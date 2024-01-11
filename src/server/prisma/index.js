const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
let prisma = new PrismaClient();


prisma = prisma.$extends({
    query: {
        user: {
            async create({ args, query}) {
                const password = await bcrypt.hash(args.data.password, 10);
                args.data.password = password;
                return query(args);
            },
        },
    },
});

module.exports = prisma;