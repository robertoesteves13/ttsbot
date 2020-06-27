module.exports = {
  name: 'remove',
  description: 'Removes a user from array',
  execute(message, args) {
    const users = require('../libs/user');
    
    users.deleteUser(args);
  }
}
