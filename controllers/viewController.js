const express=require('express');
var router=express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const View = require('../models/view');
const config = require('../config/database');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/',(req,res)=>{
  View.find((err, docs)=>{
      console.log("In view controller getting views");
    if(!err)
    {res.send(docs);}
    else {
      console.log("Error in retreiving users"+ JSON.stringify(err,undefined,2));
    }
  })
});

router.post('/', (req, res) => {
  console.log("In view controller posting views");
    let newView = new View({
        username: req.body.username,

        review: req.body.review,
        year: req.body.year
    });

    View.addView(newView, (err, view) => {
      if(err){
        res.json({success: false, msg:'Failed to record view'});
      } else {
        res.json({success: true, msg:'View recorded'});
      }
    });
});

router.delete('/:id', (req, res) => {
  console.log("In view controller deleting views");
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    View.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in View Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
