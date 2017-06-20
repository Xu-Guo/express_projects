# Express Project

Mutliple applications build with Express.js on the back-end, different projects may use different templating engine or Front-end framework.Have fun with projects.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## Credits

All the projects are built following the tutorial from [Brad Traversy](https://github.com/bradtraversy?tab=repositories), thanks for providing such good material.

## 1.Real-Time Chat 

A simple online chat application built with socket.io and Express.js on the back-end and Jade(pug) as view engine. People can join the chat and post in real-time.

### Demo Images
![alt text](https://github.com/Xu-Guo/express_projects/blob/master/demoimages/chatio.png)
<hr>

### Installation

* [Express.js](http://expressjs.com): backend framework	
* [Pug](https://pugjs.org/api/getting-started.html): view engine
* [Socket.io](https://socket.io/): real-time engine
* [Bootstrap](http://www.getbootstrap.com):  layout and styles


1. Install dependencies: ```npm install```
2. Install bootstrap: ```bower install bootstrap```

### Usage and How to Run

Desc :Real-time online chatting app, can be plugin to any existing [Express.js](http://expressjs.com) project.<br>

To run this application: 
1. Route to project folder and use ```npm start``` to start the server.
2. Open browser and go to ```http://localhost:3000```
3. Enjoy the chat app.

## 2.Passport.js App 

A simple login and authentication application. The project use back-end server local authentication method and can be integrated into any [Express.js] web applications.Database is MongoDB.

### Demo Images
![alt text](https://github.com/Xu-Guo/express_projects/blob/master/demoimages/passportapp.png)
![alt text](https://github.com/Xu-Guo/express_projects/blob/master/demoimages/passportapp1.png)
<hr>

### Installation

* [Express.js](http://expressjs.com): backend framework	
* [handlebars](http://handlebarsjs.com/): view engine
* [Passport.js](http://passportjs.org/): real-time engine
* [Bootstrap](http://www.getbootstrap.com):  layout and styles
* [Mongoose](http://mongoosejs.com/): MongoDB ODM
* [MongoDB](https://www.mongodb.com/): Database


1. Install dependencies: ```npm install```
2. Install bootstrap: ```bower install bootstrap```

### Usage and How to Run

Desc :Simple login, register, authentication application.<br>

To run this application: 
1. Route to project folder and use ```npm start``` to start the server.
2. Open browser and go to ```http://localhost:3000```
3. Enjoy the chat app.


## 3.PC repair website App 

A simple PC reqair website application 

### Demo Images
![alt text](https://github.com/Xu-Guo/express_projects/blob/master/demoimages/pcrepair.png)
<hr>

### Installation

* [Express.js](http://expressjs.com): backend framework	
* [pug](https://pugjs.org/api/getting-started.html): view engine


1. Install dependencies: ```npm install```
2. Install bootstrap: ```bower install bootstrap```

### Usage and How to Run

Please modify the code in routes/contact.js to config the nodemailer so that the server can send email to notify.

```
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
    
```

To run this application: 
1. Route to project folder and use ```npm start``` to start the server.
2. Open browser and go to ```http://localhost:3000```
3. Enjoy the chat app.

