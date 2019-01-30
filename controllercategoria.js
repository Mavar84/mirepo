var Item = require('./categoria');

// Obtiene todos los objetos Persona de la base de datos
exports.getItem = function (req, res){
	Item.find(
		function(err, item) {
			if (err)
				res.send(err)
					res.json(item); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setItem = function(req, res) {

		// Creo el objeto Persona
		Item.create(
			{nombre : req.body.nombre,descripcion: req.body.descripcion}, 
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

// Modificamos un objeto Persona de la base de datos
exports.updateItem = function(req, res){
	Item.update( {_id : req.params.item_id},
					{$set:{nombre : req.body.nombre,descripcion: req.body.descripcion}}, 
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
exports.EliminaItem = function(req, res) {
	Item.remove({_id : req.body.item_id}, function(err, item) {
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