# nosql-social-network-api<br>![MIT badge](https://img.shields.io/badge/MIT-License-green)

An API for my social network that uses a NoSQL database so that the website can handle large amounts of unstructured data.

<br>

## Contents Table

- [User Journey](#user-journey)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies/ Packages](#technologies-used)
- [License](#license)
- [Questions](#questions)

<br>

# Demonstration Video

- Please click [here](https://www.loom.com/share/858abb28b324494c82c494b92f8aefaf) to view part 1.
- Please click [here](https://www.loom.com/share/6bb5061ff2714bc1ba8321ad632e2bd6) to view part 2.

<br>

## User Journey

```
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Postman
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Postman
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

<br>

## Installation

Please follow the instructions below:

```
git clone git@github.com:amirtha-coder/nosql-social-network-api.git

cd nosql-social-network-api

npm i
```

### Seed Database

In terminal, run command:

```

npm run seed

```

<br>

## Usage

To start server, please use the command below:

```
npm run start
```

<br>

## Technologies used

- Node.JS
- dotenv
- mongodb
- mongoose
- express
- Postman

<br>

## License

MIT License

<br>

## Questions

Visit my GitHub profile [here](https://github.com/amirtha-coder)
