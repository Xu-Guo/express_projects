var express = require('express');
var nodemailer = require('nodemailer');


var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('contact', {
      title: 'Contact'
 });
});

//send Email
router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth : {
            user : 'jd@gmail.com',
            pass : 'password'//not real
        }
    });

    var mailOptions = {
        from : '"JohnDoe" <jd@gmail.com>',
        to : 'pcrepair@gmail.com',
        subject : 'Hello from PC Repair',
        text : 'You have a submission from... Name : ' + req.body.name + ' Email : ' + req.body.email + 'Message' + req.body.message,
        html : '<p>You have a submission from...</p><ul><li> Name : ' + req.body.name + '</li><li> Email : ' + req.body.email + '</li><li> Message : ' + req.body.message + '</li></ul>'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }

        console.log('Message Sent: '+info.response);
        res.redirect('/');
    });
});
module.exports = router;
