var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello everyone!' });
});

router.get('/list_all_foods', (req, res, next) => {
  res.end("GET requested => list_all_foods")
});

router.post('/insert_new_food', (req, res, next) => {
  res.end("POST requested => insert_new_food")
});

router.put('/update_a_food', (req, res, next) => {
  res.end("PULL requested => update_a_food")
});

router.delete('/delete_a_food', (req, res, next) => {
  res.end("DELETE requested => delete_a_food")
});

module.exports = router;
