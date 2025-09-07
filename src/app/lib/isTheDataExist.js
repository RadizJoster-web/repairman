function isTheDataExist(name, email, message) {
  if (!name) return "name";
  if (!email) return "email";
  if (!message) return "message";
}

module.exports = isTheDataExist;
