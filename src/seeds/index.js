require("dotenv").config();
const { mongoose } = require("mongoose");
const { Thought, User } = require("../models");
const thought = require("./thought.json");
const user = require("./user.json");

const seedThoughts = async () => {
  await Thought.deleteMany();
  const promises = thought.map((thought) => Thought.create(thought));
  await Promise.all(promises);
  console.log("Successfully seeded thoughts");
};

const seedsUsers = async () => {
  await User.deleteMany();
  const thoughtsFromDB = await Thought.find();
  console.log(thoughtsFromDB);
  const promises = user.map(async (user) => {
    const chooseRandomIndex = Math.floor(Math.random() * thoughtsFromDB.length);
    console.log();
    user.thoughts.push(thoughtsFromDB[chooseRandomIndex]._id);
    return User.create(user);
  });

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
    await seedThoughts();

    await seedsUsers();

    console.log("Seeding complete!!");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed | ${error.message}`);
  }

  // kill node process
  process.exit(0);
};

init();
