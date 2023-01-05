var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let { getHomePage } = require("../controllers/usercontroller")


router.get("/", getHomePage);

module.exports = router;
