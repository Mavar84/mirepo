var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foto = new Schema({
    base64: String,
	idconflicto: String

});

module.exports = mongoose.model('Foto',foto);