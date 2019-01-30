var mongoose = require('mongoose');

module.exports = mongoose.model('Categoria', {
	nombre: String,
	descripcion: String

});