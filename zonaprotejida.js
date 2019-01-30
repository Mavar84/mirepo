var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var zonaprotejida = new Schema({
    ejex: String,
	ejey: String,
    estadoensistema:String,
    descripcion:String,
Numero:String,

    vectordepuntos:String,
    usuario:String,
   


});

module.exports = mongoose.model('Zonaprotejida',zonaprotejida);