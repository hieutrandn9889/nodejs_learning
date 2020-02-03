var express = require('express');
var router = express.Router();
let Food   = require('../models/FoodModel')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello everyone!' });
});

router.get('/list_all_foods', (req, res, next) => {
  res.end("GET requested => list_all_foods")
});

// insert db
router.post('/insert_new_food', (req, res, next) => {
  const newFood = new Food({
    name: req.body.name,
    foodDescription: req.body.foodDescription
  });
  newFood.save((err) => {
    if (err) {
      res.json({
        result: "failed",
        data:{},
        message: `Error is: ${err}`
      });
    } else {
      res.json({
        result: "OK",
        data:{
          name: req.body.name,
          foodDescription: req.body.foodDescription,
          message: "Insert new food successfully"
        },
      });
    }
  });
});

router.put('/update_a_food', (req, res, next) => {
  res.end("PULL requested => update_a_food")
});

router.delete('/delete_a_food', (req, res, next) => {
  res.end("DELETE requested => delete_a_food")
});

module.exports = router;