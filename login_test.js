module.exports = {
  loginTest: function loginTest(input) {
    const users = [
      {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
      },
      {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
      },
      {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
      },
      {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
      },
      {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
      }
    ]

    const result = users.find(user => user.email === input.email && user.password === input.password)
    if (result !== undefined) {
      return result.firstName
    }
    else {
      return false
    }
  },

  users: [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
}
