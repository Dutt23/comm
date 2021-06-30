import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'shatyaki_dutt@hotmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  }, {
    name: 'Example user1',
    email: 'exmaple_user_1@hotmail.com',
    password: bcrypt.hashSync('123456', 10)
  }, {
    name: 'Example user2',
    email: 'exmaple_user_2@hotmail.com',
    password: bcrypt.hashSync('123456', 10)
  }
]


export default users