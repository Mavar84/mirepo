var mongoose = require('mongoose');

module.exports = mongoose.model('Tipousuario', {
	nombre: String,
	descripcion: String

});