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
exports.getLog = function (req, res){
	Log.find(
		function(err, log) {
			if (err)
				res.send(err)
					res.json(log); // devuelve todas las Personas en JSON		
				}
			);
}

exports.getLogbyuser = function(req, res) {
	Log.find({$or: [{ "accion": { $regex: '.*' + req.body.nombreusuario + '.*' }}, { nombreusuario : req.body.nombreusuario }]}, function(err, log) {
			if (err)
				res.send(err)
                    console.log(req.body.nombreusuario);
					res.json(log); // devuelve todas las Personas en JSON		
				}
			);
};


exports.getLogbydate = function(req, res) {
    
	Log.find({fecha: {
        $gt:  req.body.fechainicial,
        $lt:  req.body.fechafinal
    }
}
        , function(err, log) {
			if (err)
				res.send(err)
                   
					res.json(log); // devuelve todas las Personas en JSON		
				}
			);
};

// Guarda un objeto Persona en base de datos
exports.setLog = function(req, res) {

		// Creo el objeto Persona
		Log.create(
			{nombreusuario : req.body.nombreusuario,dia: req.body.dia,mes:req.body.mes,anno:req.body.anno,hora:req.body.hora,minuto:req.body.minuto,accion:req.body.accion}, 
			function(err, log) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Log.find(function(err, log) {
				 	if (err)
				 		res.send(err)
				 	res.json(log);
				});
			});

	}






// Modificamos un objeto Persona de la base de datos
exports.updateLog = function(req, res){
	Log.update( {_id : req.params._id},
					{$set:{nombreusuario : req.body.nombreusuario,dia: req.body.dia,mes:req.body.mes,anno:req.body.anno,hora:req.body.hora,minuto:req.body.minuto,accion:req.body.accion}}, 
					function(err, log) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Log.find(function(err, log) {
				 	if (err)
				 		res.send(err)
				 	res.json(log);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.EliminaLog = function(req, res) {
	Log.remove({_id : req.body._id}, function(err, log) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Log.find(function(err, log) {
				if (err)
					res.send(err)
				res.json(log);
			});
		});
}

// Elimino un objeto Persona de la base de Datos
