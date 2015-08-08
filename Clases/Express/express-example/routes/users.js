var express = require('express');
var router = express.Router();

var users = {
    user1: {
        name: 'user1',
        email: 'user1@gmail.com'
    },
    user2: {
        name: 'user2',
        email: 'user2@gmail.com'
    }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Pasame user1 o user2');
});

router.get('/:userId', function(req, res, next) {
	if (user[req.params.userId]) {	
	    res.render('user', {
	    	name: users[req.params.userId].name,
	    	email: users[req.params.userId].email
	    });
	} else {
		res.send('El usuario no existe');
	}
});

module.exports = router;