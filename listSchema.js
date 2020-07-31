const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let listSchema = new Schema({

    TaskName: {
        type: String,
  
    },
    expiry: {
        type: Date();
    },
    completionStatus:  {
        type: String,
        enum:['complete','notComplete']
    },
    createdBy: {
        type: String,
        default: 'admin
    },
    
}, {
    timestamps: true
});


let List = mongoose.model('List', listSchema);
module.exports = List;