const connection = require("../config/connection");

const { Thought, User } = require("../models");
const thought = require("./thought.json");
const user = require("./user.json");

const seedThoughts = async () => {
  const promises = thought.map((thought) => Thought.create(thought));
  await Promise.all(promises);
  console.log("Successfully seeded thoughts");
};

const seedsUsers = async () => {
  const promises = user.map((user) => User.create(user));
  await Promise.all(promises);
  console.log("Successfully seeded users");
};
const init = async () => {
  try {
    console.log("Seeding database...");
    await connection.sync({ force: true });

    //seed all data from entities
    await seedsUsers();

    await seedThoughts();

    console.log("Seeding complete!!");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed | ${error.message}`);
  }

  // kill node process
  process.exit(0);
};

init();
