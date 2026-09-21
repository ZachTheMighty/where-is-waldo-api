const prisma = require("../lib/prisma.ts");
const { body, validationResult, matchedData } = require("express-validator");

const getTopUsers = async (req, res) => {
  const allUsers = await prisma.user.findMany({
    orderBy: { time: "asc" },
  });
  const topUsers = allUsers.slice(0, 3);
  res.json(topUsers);
};

const createUser = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username can't empty")
    .isLength({ min: 4, max: 24 })
    .withMessage("Username must be between 4 and 24"),
  body("time"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });

    const { username, time } = matchedData(req);
    await prisma.user.create({
      data: {
        name: username,
        time,
      },
    });
    res.json({ message: "created user successfully" });
  },
];

module.exports = { createUser, getTopUsers };
