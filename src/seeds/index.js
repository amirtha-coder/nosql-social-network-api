require("dotenv").config();
const { default: mongoose } = require("mongoose");
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
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(MONGODB_URI, options);

    console.log("[INFO]: Successfully connected to DB");

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
