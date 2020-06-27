var array = [];
function createUser(userID) {
  const obj = {};
  obj.ID = userID;
  obj.parameters = "-v pt";
  array.push(obj);
}

function deleteUser(userID) {
  array.splice(array.indexOf(userID), 1);
}

exports.deleteUser = deleteUser;
exports.array = array;
exports.createUser = createUser;
