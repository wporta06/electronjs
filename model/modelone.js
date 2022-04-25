const mongosse = require('mongoose');

const UserSchema = new mongosse.Schema({
    firstname:{
        type:String,
    },
    lastname: {
        type:String
    }
});

const UserModel = mongosse.model('UserModel', UserSchema);

module.exports = {UserModel};
