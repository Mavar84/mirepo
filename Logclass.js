var mongoose = require('mongoose');

module.exports = mongoose.model('Log', {
	nombreusuario: String,
	dia: String,
    mes:String,
      anno:String,
      hora:String,
    minuto:String,
    accion:String,
    fecha: {
    type: Date,
    default: new Date()
}
});