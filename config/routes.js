var express = require('express');
var router = express.Router();
var funeralHomesCtrl = require('../controllers/funeralHomes')

/* GET home page. */
// API Documentation Landing Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marigold' });
});

// API Routes, respond with JSON only
router.route('/api/funeralHomes')
  .get(funeralHomesCtrl.index)
  .post(funeralHomesCtrl.create);

router.route('/api/funeralHomes/:id')
  .get(funeralHomesCtrl.show)
  .patch(funeralHomesCtrl.update)
  .delete(funeralHomesCtrl.destroy);

module.exports = router;
