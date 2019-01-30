var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var conflicto = new Schema({
    ejex: String,
	ejey: String,
    estadoensistema:String,
    palabrasclave:String,
Numero:String,
Nameofconflict:String,
Country:String,
StateorProvince:String,
affectedpopulation:String,
Activitydrugtrafficking:String,
SpecificCommodity:String,
Conflictdetailsandactors:String, 
Relevantgovernment:String, 
Actors:String, 
Relevantprivatesectoractors:String, 
RelevantEJOsactors:String,
Supporters:String, 
Intensityoftheconflict:String, 
Startoftheconflict:String,
Groupsaffected:String, 
Formsofmobilization:String,
Environmentalimpacts:String,
Healthimpacts:String,
Socioeconomicimpacts:String,
StatusofConfirmation:String,
ModeofConnection:String,
Traffickinggroups:String, 
Typeofroute:String, 
HotSpotrelated:String, 
Sources:String, 
Quotestoreinforce:String, 
    fecha:Date,
    img1: { data: Buffer, contentType: String},
    vectordepuntosdezona:String,
    usuario:String,
    RelevantgovernmentActors: String,
    Lossofvalueinecosystemservicesbycountry:String


});

module.exports = mongoose.model('Conflicto',conflicto);