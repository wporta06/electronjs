
const db = require('../db/db');


module.exports.add = async ({ firstname, lastname }, res) => {
    try {
      
      const user = await db.create({ firstname,lastname});
      return user;
    }
    catch (err) {
      handleErrors(err);
      throw err;
    }
  }

  
