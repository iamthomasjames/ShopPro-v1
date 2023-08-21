import bcrypt from 'bcrypt';

const user= [
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "isAdmin": true,
      "password": bcrypt.hashSync('12345',10)
    },
    {
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "isAdmin": false,
      "password": bcrypt.hashSync('12345',10)
    },
    {
      "name": "Peter Smith",
      "email": "petersmith@example.com",
      "isAdmin": false,
      "password": bcrypt.hashSync('12345',10)
    },
    {
      "name": "Susan Jones",
      "email": "susanjones@example.com",
      "isAdmin": false,
      "password": bcrypt.hashSync('12345',10)

    },
    {
      "name": "David Williams",
      "email": "davidwilliams@example.com",
      "isAdmin": true,
      "password": bcrypt.hashSync('12345',10)
    }
  ]

  export default user;