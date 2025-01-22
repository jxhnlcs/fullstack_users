const { db } = require('../models/db');

const getAllUsers = (callback) => {
  const getAllUsersQuery = `
    SELECT * FROM users
  `;

  db.query(getAllUsersQuery, (err, result) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, result);
  });
};

module.exports = {
  getAllUsers,
};