const getHomePage= function(req,res){
  res.render('index', { title: 'Express' });

}

module.exports={getHomePage}