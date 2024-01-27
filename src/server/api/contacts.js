const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;

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

router.post("/add", async (req, res, next) => {
    try {
        
        const { name, email, company, phone, message } = req.body;
        if (!name) {
            return next({
                status: 400,
                message: "Name is required.",
            });
        }
        
        if (!email) {
            return next({
                status: 400,
                message: "Email is required.",
            });
        }
        
        if (!company) {
            return next({
                status: 400,
                message: "Company is required.",
            });
        }
        
        if (!phone) {
            return next({
                status: 400,
                message: "Phone is required.",
            });
        }
        
        if (!message) {
            return next({
                status: 400,
                message: "Message is required.",
            });
        }
        const newContact = await prisma.contact.create({
            data: {
                name,
                email,
                company,
                phone,
                message
            },
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

