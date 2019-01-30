var Item = require('./zonaprotejida');
var Log = require('./Logclass');
// Obtiene todos los objetos Persona de la base de datos
exports.getItem = function (req, res){
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
	Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	   Log.create(
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'The list of all protected areas is accessed by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                }
				}
			);
}




exports.buscaporid = function(req, res) {
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
	Item.find({_id:req.body.id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				   Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Protected area information is sought : ' + req.body.id +', by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
    
    
    
    
    
    
    
    }
			);
};



exports.buscaporcoordenadas = function(req, res) {
	Item.find({ejex:req.body.ejex,ejey:req.body.ejey}, function(err, item) {
			if (err)
				res.send(err)
					res.json(item); // devuelve todas las Personas en JSON		
				}
			);
};

exports.activosparamostrar = function(req, res) {
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
	Item.find({estadoensistema:'1'}, function(err, item) {
			if (err)
                {
				res.send(err)
                }
        else{
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	   Log.create(
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'The list of all protected  actived areas is accessed by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
				
    
    }
			);
};
// Guarda un objeto Persona en base de datos
exports.setItem = function(req, res) {

		// Creo el objeto Persona
    
   // \
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
		Item.create(
			{ejex : req.body.ejex,
             ejey: req.body.ejey, 
             usuario:req.body.usuario,
          
    estadoensistema:req.body.estadoensistema,
    descripcion:req.body.descripcion,
Numero:req.body.Numero,

    vectordepuntos:req.body.vectordepuntos,
     }, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                   Log.create(
			{nombreusuario : req.body.usuario,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'New protected area entered: ' + req.body.Numero +', by the user: ' + req.body.usuario}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                
          }
               	
			});

	}
//,img1.data:req.body.foto,img1.contentType = 'jpg'
// Modificamos un objeto Persona de la base de datos
exports.updateItem = function(req, res){
    
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
	Item.update( {_id : req.body.id},
					{$set:{
            jex : req.body.ejex,
             ejey: req.body.ejey, 
             usuario:req.body.usuario,
          
    estadoensistema:req.body.estadoensistema,
    descripcion:req.body.descripcion,
Numero:req.body.Numero,

    vectordepuntos:req.body.vectordepuntos,
                    }}, 
					function(err, item) {
						if (err)
                            
                            {
							res.send(err);
                                
                            }
        else{
				// Obtine y devuelve todas las personas tras crear una de ellas
				Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				 	res.json(item);
				});
            
               Log.create(
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Protected area: ' + req.body.Numero +' modified by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
        }
			});
	
}

exports.updateCapa = function(req, res){
	Item.update( {_id : req.body.id},
					{$set:{vectordepuntosdezona: req.body.vectordepuntosdezona,ejex : req.body.ejex,ejey: req.body.ejey}}, 
					function(err, item) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				 	res.json(item);
				});
			});
	}
// Elimino un objeto Persona de la base de Datos
exports.elimina = function(req, res) {
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
	Item.remove({_id : req.body.id}, function(err, item) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Item.find(function(err, item) {
				if (err)
                    {
					res.send(err)
                    }
                else{
				res.json(item);
                     Log.create(
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Protected area: ' + req.body.id +' removed by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                    
                }
			});
		});
}

// Elimino un objeto Persona de la base de Datos
exports.removeItem = function(req, res) {
	Item.remove({_id : req.params.item_id}, function(err, item) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Item.find(function(err, item) {
				if (err)
					res.send(err)
				res.json(item);
			});
		});
}

exports.updateCapa = function(req, res){
	Item.update( {_id : req.body.id},
					{$set:{vectordepuntos: req.body.vectordepuntos,ejex : req.body.ejex,ejey: req.body.ejey}}, 
					function(err, item) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				 	res.json(item);
				});
			});
	}
