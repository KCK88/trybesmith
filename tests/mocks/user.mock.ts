const listUserReturn = 
[
    {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 10,
      password: '$2a$10$iFKptYYk5Fl1AG0q4/jXk.ktDbXxdo2BMAye.7AhbXMgs5KykjevC'
    },
    {
      id: 2,
      username: 'Eddie',
      vocation: 'Guerreiro',
      level: 8,
      password: '$2a$10$iFKptYYk5Fl1AG0q4/jXk.ktDbXxdo2BMAye.7AhbXMgs5KykjevC',
    },
    {
      id:2,
      username: 'Helga',
      vocation: 'Curandeira',
      level: 9,
      password: '$2a$10$Qs9IXEtFuDut.wQwyWd2xu5u0/he85zUI9D9na1gZi7wJUj0HPawm',
    },
  ]

  const userAndProducts = [
    {
      "username": "Hagar",
      "productIds": [
        1,
        2,
        6,
      ]
    },
    {
      "username": "Eddie",
      "productIds": [
        3,
        4,
      ]
    },
    {
      "username": "Helga",
      "productIds": [
        3,
        4,
      ]
    }
  ]

  export default {
    listUserReturn,
    userAndProducts,
  }