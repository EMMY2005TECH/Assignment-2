var express = require('express');
var router = express.Router();

/* obtain home page, render index.ejs and pass on the page title */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*Get home page /home */

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* obtain About me page, run about.ejs and pass page title */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* obtain projects, run project.ejs and pass on the page title */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* obtain contact me page, run contact.ejs and pass on the page title */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});


module.exports = router;
