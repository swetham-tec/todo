const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    userName: {
        type: String,
  
    },
   
    password: {
		type: String,
	Required: true
	}
    
}, {
    timestamps: true
});


let User = mongoose.model('User', listSchema);
module.exports = User;