function authMiddleware(req, res, next){
    if(!req.session.userLogged){
        res.redirect('login');
    }
    next();
}

module.exports = authMiddleware;