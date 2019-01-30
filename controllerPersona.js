var Persona = require('./persona');
var Log = require('./Logclass');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

function comparadatos2(usuariosifrado,listado)
{
   
                try {
                    var ret = usuariosifrado.replace(/"/g,'');
					if(listado.length > 0)
                        {   var bandera = false;
                            for(var ele in listado)
                                {
                                    var datosdesdeelcliente = JSON.parse(decrypt(ret));
                              //      console.log(decrypt(req.body.usercifrado));
                                    if(listado.email == datosdesdeelcliente.email && listado.password == datosdesdeelcliente.password)
                                        {
                                           bandera = true;
                                            break;
                                        }
                               }
                            return bandera;   
                            
                        }
                    
                }
            catch(err)
                {
                    console.log(err);
                    return false;  
                }
            
				

}


exports.comparadatos = function (req, res){
    
    
   // res.json(comparadatos(req.body.usercifrado));
    

	Persona.find(
		function(err, persona) {
			if (err)
				res.send(err)
                try {
                    var ret = req.body.usercifrado.replace(/"/g,'');
                        console.log("esta es la funcion: " + comparadatos2(req.body.usercifrado,persona));
					if(persona.length > 0)
                        {   var bandera = false;
                            for(var ele in persona)
                                {
                                    var datosdesdeelcliente = JSON.parse(decrypt(ret));
                                    console.log(datosdesdeelcliente);
                              //      console.log(decrypt(req.body.usercifrado));
                                    if(persona.email == datosdesdeelcliente.email && persona.password == datosdesdeelcliente.password)
                                        {
                                           bandera = true;
                                            break;
                                        }
                               }
                            res.json(bandera);   
                            
                        }
                    
                }
            catch(err)
                {
                    console.log(err);
                    res.json(false);  
                }
            
				}
			);
}


// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
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
	Persona.find(
		function(err, persona) {
			if (err)
            {res.send(err)}
            else
                
                
                
            {res.json(persona);
            
             
            
            }
            
            // devuelve todas las Personas en JSON		
				}
			);
}

exports.getPersonabyemail = function(req, res) {
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
	Persona.find({email:req.body.email}, function(err, persona) {
			if (err){
				res.send(err)
            }
        else{
					res.json(persona); // devuelve todas las Personas en JSON
                    Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Look for the information of the user: ' + req.body.email}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        
        }
        
        
        
        
				}
			);
};

exports.login = function(req, res) {
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
	Persona.find({email:req.body.email,password:req.body.password}, function(err, persona) {
			if (err) 
                {
				res.send(err)
                }
        else{
                    if(persona.length > 0)
                        {
                            console.log(req.body.email);
                            console.log(req.body.password);
                            console.log(persona);
                            console.log(persona[0].email);
                             console.log(encrypt(persona[0].email));
                            persona[0].email= encrypt(persona[0].email);
                            persona[0].password = encrypt(persona[0].password);
                            var hw = encrypt(JSON.stringify(persona));
					       res.json(persona); // devuelve todas las Personas en JSON	
                            Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Successful entry into the system by the user: ' + req.body.email}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                        }
                    else
                        {
                            res.json("error");
                                         Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Attempt to enter the system, with erroneous data, by the user: ' + req.body.email}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                        }
            
              
       
        }
          
        
        
        
        
        
        
        
        
        
        
        
        
        
				}
			);
};



// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {
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
		// Creo el objeto Persona
		Persona.create(
			{nombre : req.body.nombre,apellido: req.body.apellido,email:req.body.email,tipousuario:req.body.tipousuario,password:req.body.password,foto:req.body.fotoparte1+ req.body.fotoparte2}, 
			function(err, persona) {
				if (err)
                    {
					res.send(err);
                    }
                else{
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
                         Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Creation of a new user: '+ req.body.email +' by the user:: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                }
                
                
			});

	}


// Modificamos un objeto Persona de la base de datos
exports.configPersona = function(req, res){
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
	Persona.update( {_id : req.body._id},
					{$set:{password:req.body.password,foto:req.body.fotoparte1+ req.body.fotoparte2}}, 
					function(err, persona) {
						if (err)
                            {
							res.send(err);}
        else{
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
        
               Log.create(
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Modification of personal data by the user:'+  req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
        
        
			});
	}



// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
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
	Persona.update( {_id : req.params.persona_id},
					{$set:{nombre : req.body.nombre,apellido: req.body.apellido,email:req.body.email,tipousuario:req.body.tipousuario,password:req.body.password,foto:req.body.foto}}, 
					function(err, persona) {
						if (err)
                            {
							res.send(err);}
        else{
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
           Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Update of user data: '+ req.body.email+', by the user:'+  req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
        
        
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.EliminaPersona = function(req, res) {
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
	Persona.remove({_id : req.body.persona_id}, function(err, persona) {
		if (err)
            {
			res.send(err);}
        else{
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
        Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Delete of user data: '+ req.body.persona_id+', by the user:'+  req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
        
        
		});
}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
		});
}