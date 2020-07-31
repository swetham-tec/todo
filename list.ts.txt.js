var mongoose = require('mongoose');
var lists = require('../models/list');

module.exports = function(app) {

 app.get('lists', (req, res) => {
	 lists.find({}).exec((error,success)=>{
		 if(error){
			res.send({ status: 0, error: error });
		 } else{
			    res.json(success:success);
		 }
	 });
 }
 app.post('/lists', (req, res) => {
        var list = new lists(req.body);
        list.save((error, success) => {
            if (error) {
                res.send({ status: 0, error: error });
            } else {
                res.json(success:success);
            }
        });
    });
 
  app.patch('/lists', (req, res) => {
        lists.updateOne({ _id: req.body.id }, { $set: { TaskName: req.body.TaskName } }, (error, success) => {
            if (error) {
                res.send({ status: 0, error: error });
            } else {
                res.json(success:success);
            }
        });
    });
	app.delete('lists', function (req, res) {
    lists.deleteOne({ _id: req.query.id }, (error, list) => {
            if (error) {
                res.send({ status: 0, error: error });
            } else {
				 res.json(list:list);

            }
        });
	}
}