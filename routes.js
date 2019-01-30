var Persona = require('./persona');
var ControllerPersona = require ('./controllerPersona');
var ControllerCategoria = require ('./controllercategoria');
var ControllerConflicto = require ('./controllerc');
var ControllerFoto = require ('./controllerfoto');
var ControllerLog = require ('./ControllerLog');
var ControllerEmail = require ('./controlleremail');
var Controllerzonaprotejida = require ('./controllerzonaprotejida');
module.exports = function(app) {

    
   
    
	// devolver todos los Personas
	app.get('/api/persona', ControllerPersona.getPersona); //localhost:8080/api/persona
	// Crear una nueva Persona
    
    app.post('/api/personaporemail', ControllerPersona.getPersonabyemail);
    app.post('/api/login', ControllerPersona.login);
    app.post('/api/personatodos', ControllerPersona.getPersona);
       app.post('/api/configpersona', ControllerPersona.configPersona);
	app.post('/api/persona', ControllerPersona.setPersona);
    app.post('/api/eliminapersona', ControllerPersona.EliminaPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', ControllerPersona.updatePersona);//localhost:8080/api/persona:9
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', ControllerPersona.removePersona);//localhost:8080/api/persona:6
	// application 
    
 
    app.post('/api/categoriatodos', ControllerCategoria.getItem);
	app.post('/api/categoria', ControllerCategoria.setItem);
    app.post('/api/eliminacategoria', ControllerCategoria.EliminaItem);
    
    	app.post('/api/conflicto', ControllerConflicto.setItem);
      	app.post('/api/modificaconflicto', ControllerConflicto.updateItem);
    	app.post('/api/eliminaconflicto', ControllerConflicto.eliminaconflicto);
    	app.post('/api/conflictoxcoordenadas', ControllerConflicto.buscaporcoordenadas);
        	app.post('/api/graficoporpais', ControllerConflicto.porpais);
     	app.post('/api/graficoporanno', ControllerConflicto.poranno);
    	
    
     	app.post('/api/modificacapa', ControllerConflicto.updateCapa);

        	app.post('/api/conflictotodos', ControllerConflicto.getItem);
    	app.post('/api/conflictotodossolonombre', ControllerConflicto.getItemonlyname);
    	app.post('/api/foto', ControllerFoto.setItem);
    	app.post('/api/fotoxconflicto', ControllerFoto.buscaporidconflicto);
      	app.post('/api/eliminafotoxid', ControllerFoto.removeItem);
    	//app.post('/api/conflictoxcoordenadas', ControllerConflicto.buscaporcoordenadas);
      	app.post('/api/compruebaseguridad', ControllerPersona.comparadatos);
    	app.post('/api/verlog', ControllerLog.getLog);
    
    app.post('/api/verlogporusuario', ControllerLog.getLogbyuser);
     app.post('/api/verlogporfecha', ControllerLog.getLogbydate);
     app.post('/api/enviaemailrecuperacion', ControllerEmail.sendrecoveryemail);
    
     app.post('/api/enviaemailconpassword', ControllerEmail.sendpasswordtoemail);
    
    
    
    	app.post('/api/todaslaszonasprotejidas', Controllerzonaprotejida.getItem);
    	app.post('/api/guardazonasprotejidas', Controllerzonaprotejida.setItem);
    	app.post('/api/modificazonasprotejidas', Controllerzonaprotejida.updateItem);
    	app.post('/api/eliminazonasprotejidas', Controllerzonaprotejida.elimina);
        	app.post('/api/modificacapazonaprotejida', Controllerzonaprotejida.updateCapa);
 app.post('/log',function(req,res){
   
});
    
   
	app.get('*', function(req, res) {//localhost:8080
		res.sendfile('./login.html'); // Carga única de la vista
	});
    
    
    
    
};