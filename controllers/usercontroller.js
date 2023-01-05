const getHomePage= function(req,res){
  res.render('index', { title: 'Express' });
}
const getSignupPage= function(req,res){
  res.render('signup',{ title: 'Express' });
}


module.exports={getHomePage,getSignupPage}