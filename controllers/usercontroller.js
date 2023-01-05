const getHomePage = function (req, res) {
  res.render('home', { title: 'Express' });

}

module.exports = { getHomePage }