const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();


router.get("/", async (req, res, next) => {
    try {
        const id = +req.params.id;
        const contact = await prisma.contact.findMany();

        if (!contact) {
            return next({
                status: 404,
                message: `Could not find contacts.`,
            });
        }
        res.json(contact);
    } catch (err) {
        next(err);
    }
});


router.put("/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;

        const contact = await prisma.contact.findUnique({ where: { id } });

        const contactExists = await prisma.contact.findUnique({
            where: { id },
        });

        if (!contactExists) {
            return next({
                status: 404,
                message: `Could not find contact with id ${id}.`,
            });
        }

        // add error handling for typeof errors

        const updatedContact = await prisma.contact.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedContact);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newContact = await prisma.contact.create({
            data: req.body,
        });
        res.json(newContact);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;
        const contact = await prisma.contact.findUnique({ where: { id } });

        if (!contact) {
            return next({
                status: 404,
                message: `Could not find contact with id ${id}.`,
            });
        }

        await prisma.contact.delete({ where: { id } });
        res.json(contact);
    } catch (err) {
        next(err);
    }
});

module.exports = router;