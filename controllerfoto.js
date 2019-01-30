var Item = require('./foto');
var Log = require('./Logclass');

exports.setItem = function(req, res) {

		// Creo el objeto Persona
    
   // 
    
  console.log(req.body.idconflicto);  
		Item.create(
			{base64 : req.body.base641+ req.body.base642,idconflicto: req.body.idconflicto}, 
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

exports.buscaporidconflicto = function(req, res) {
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
	Item.find({idconflicto:req.body.idconflicto}, function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
					res.json(item); // devuelve todas las Personas en JSON	
                    
                       Log.create(
			{nombreusuario : req.body.email,dia: day,mes:month,anno:year,hora:hour,minuto:min,accion:'Access to the images of the finding:'+ req.body.idconflicto +', by the user:' + req.body.autuser}, 
			function(err, log) {
				if (err)
					res.send(err);
			});
                }
				}
			);
};
// Elimino un objeto Persona de la base de Datos
// Elimino un objeto Persona de la base de Datos
exports.removeItem = function(req, res) {
    
	Item.remove({_id : req.body.id}, function(err, item) {
       
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