module.exports = {
  name: 'add',
  description: 'Add user to list',
  execute(message, args) {
    const users = require('../libs/user');

    users.createUser(args);
    message.channel.send('User added!');
  }
}
