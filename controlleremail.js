 nodeMailer = require('nodemailer');
     var crypto = require('crypto');
var Log = require('./Logclass');
var Persona = require('./persona');

function cryptoRandomNumber(minimum, maximum){
	var distance = maximum-minimum;
	
	if(minimum>=maximum){
		console.log('Minimum number should be less than maximum');
		return false;
	} else if(distance>281474976710655){
		console.log('You can not get all possible random numbers if range is greater than 256^6-1');
		return false;
	} else if(maximum>Number.MAX_SAFE_INTEGER){
		console.log('Maximum number should be safe integer limit');
		return false;
	} else {
		var maxBytes = 6;
		var maxDec = 281474976710656;
		
		// To avoid huge mathematical operations and increase function performance for small ranges, you can uncomment following script
		/*
		if(distance<256){
			maxBytes = 1;
			maxDec = 256;
		} else if(distance<65536){
			maxBytes = 2;
			maxDec = 65536;
		} else if(distance<16777216){
			maxBytes = 3;
			maxDec = 16777216;
		} else if(distance<4294967296){
			maxBytes = 4;
			maxDec = 4294967296;
		} else if(distance<1099511627776){
			maxBytes = 4;
			maxDec = 1099511627776;
		}
		*/
		
		var randbytes = parseInt(crypto.randomBytes(maxBytes).toString('hex'), 16);
		var result = Math.floor(randbytes/maxDec*(maximum-minimum+1)+minimum);
		
		if(result>maximum){
			result = maximum;
		}
		return result;
	}
}
     
     
     exports.sendrecoveryemail = function(req, res) {
          var randomstring = Math.random().toString(36).slice(-8);
     let transporter = nodeMailer.createTransport({
          host: 'mail.sistemcr.com',
          port: 587,
          secure: false,
          auth: {
              user: 'admin@sistemcr.com',
              pass: 'diptongo'
          }
      });
      let mailOptions = {
          from: '"PEGASUS admin" <admin@sistemcr.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: req.body.html + "<strong>" +randomstring + "tmp</strong>" // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          
             var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
	Persona.update( {email : req.body.to},
					{$set:{password:randomstring + "tmp"}}, 
					function(err, persona) {
						if (err)
                            {
							res.send(err);}
        else{
				
        
               Log.create(
			{nombreusuario : req.body.to,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Recovering of the password by the user: '+  req.body.to}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
        
        
			});
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.send("E-mail sent")
          });


};

 exports.sendpasswordtoemail = function(req, res) {
          var randomstring = Math.random().toString(36).slice(-8);
     let transporter = nodeMailer.createTransport({
          host: 'mail.sistemcr.com',
          port: 587,
          secure: false,
          auth: {
              user: 'admin@sistemcr.com',
              pass: 'diptongo'
          }
      });
      let mailOptions = {
          from: '"PEGASUS admin" <admin@sistemcr.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: req.body.html // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.send("E-mail sent")
          });


};