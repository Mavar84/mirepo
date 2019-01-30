var Item = require('./conflicto');
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
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'The list of all findings is accessed by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                }
				}
			);
}


exports.getItemonlyname = function (req, res){
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
	Item.find({},{'Nameofconflict':1,'vectordepuntosdezona':1},
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	   Log.create(
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'The list of all findings is accessed by the user: ' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                }
				}
			);
}


exports.porpais = function(req, res) {
   	Item.aggregate([
        {
            $group: {
                _id: '$Country',  //$region is the column name in collection
                count: {$sum: 1}
            }
        }
    ], function (err, result) {
        if (err) {
              res.send(err);
              console.log(err);
        } else {
            res.json(result);
        }
    });
    
    
};



exports.poranno = function(req, res) {
   	Item.aggregate([
       {
            $group: {
               // _id : { year: { $year : "$fecha" }},
                _id : { $year : "$fecha" },
                count: {$sum: 1}
            }
        }
    ], function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.json(result);
        }
    });
    
    
};


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
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Conflict information is sought : ' + req.body.id +', by the user: ' + req.body.autuser}, 
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
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'The list of all findings actived is accessed by the user: ' + req.body.autuser}, 
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
             fecha:req.body.fecha,
    estadoensistema:req.body.estadoensistema,
            palabrasclave:req.body.palabrasclave,
            vectordepuntosdezona: req.body.vectordepuntosdezona,
            Numero:req.body.Numero,
Nameofconflict:req.body.Nameofconflict,
Country:req.body.Country,
StateorProvince:req.body.StateorProvince,
affectedpopulation:req.body.affectedpopulation,
Activitydrugtrafficking:req.body.Activitydrugtrafficking,
SpecificCommodity:req.body.SpecificCommodity,
Conflictdetailsandactors:req.body.Conflictdetailsandactors, 
Relevantgovernment:req.body.Relevantgovernment, 

Relevantprivatesectoractors:req.body.Relevantprivatesectoractors, 
RelevantEJOsactors:req.body.RelevantEJOsactors,
Supporters:req.body.Supporters, 
Intensityoftheconflict:req.body.Intensityoftheconflict, 
Startoftheconflict:req.body.Startoftheconflict,
Groupsaffected:req.body.Groupsaffected, 
Formsofmobilization:req.body.Formsofmobilization,
Environmentalimpacts:req.body.Environmentalimpacts,
Healthimpacts:req.body.Healthimpacts,
Socioeconomicimpacts:req.body.Socioeconomicimpacts,
StatusofConfirmation:req.body.StatusofConfirmation,
ModeofConnection:req.body.ModeofConnection,
Traffickinggroups:req.body.Traffickinggroups, 
Typeofroute:req.body.Typeofroute, 
HotSpotrelated:req.body.HotSpotrelated, 
Sources:req.body.Sources, 
Quotestoreinforce:req.body.Quotestoreinforce, 
            RelevantgovernmentActors:req.body.RelevantgovernmentActors, 
            
             Lossofvalueinecosystemservicesbycountry:  req.body.Lossofvalueinecosystemservicesbycountry
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
			{nombreusuario : req.body.usuario,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'New finding entered: ' + req.body.Nameofconflict +', by the user: ' + req.body.usuario}, 
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
             usuario:req.body.usuario,
             fecha:req.body.fecha,
    estadoensistema:req.body.estadoensistema,
            palabrasclave:req.body.palabrasclave,
           
            Numero:req.body.Numero,
Nameofconflict:req.body.Nameofconflict,
Country:req.body.Country,
StateorProvince:req.body.StateorProvince,
affectedpopulation:req.body.affectedpopulation,
Activitydrugtrafficking:req.body.Activitydrugtrafficking,
SpecificCommodity:req.body.SpecificCommodity,
Conflictdetailsandactors:req.body.Conflictdetailsandactors, 
Relevantgovernment:req.body.Relevantgovernment,
Relevantprivatesectoractors:req.body.Relevantprivatesectoractors, 
RelevantEJOsactors:req.body.RelevantEJOsactors,
Supporters:req.body.Supporters, 
Intensityoftheconflict:req.body.Intensityoftheconflict, 
Startoftheconflict:req.body.Startoftheconflict,
Groupsaffected:req.body.Groupsaffected, 
Formsofmobilization:req.body.Formsofmobilization,
Environmentalimpacts:req.body.Environmentalimpacts,
Healthimpacts:req.body.Healthimpacts,
Socioeconomicimpacts:req.body.Socioeconomicimpacts,
StatusofConfirmation:req.body.StatusofConfirmation,
ModeofConnection:req.body.ModeofConnection,
Traffickinggroups:req.body.Traffickinggroups, 
Typeofroute:req.body.Typeofroute, 
HotSpotrelated:req.body.HotSpotrelated, 
Sources:req.body.Sources, 
Quotestoreinforce:req.body.Quotestoreinforce, 
            RelevantgovernmentActors:req.body.RelevantgovernmentActors,  
                    Lossofvalueinecosystemservicesbycountry:  req.body.Lossofvalueinecosystemservicesbycountry
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
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Find: ' + req.body.Nameofconflict +' modified by the user: ' + req.body.autuser}, 
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
exports.eliminaconflicto = function(req, res) {
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
			{nombreusuario : req.body.autuser,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Find: ' + req.body.nombrehalleliminado +' removed by the user: ' + req.body.autuser}, 
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