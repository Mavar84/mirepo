function devuelvecantones(provincia)
{
    var devuelvis = "<option value='0' selected >Todos los cantones</option>";
    switch (provincia) {
        case "San José":
           
            devuelvis = devuelvis + "<option value='San José'>San José</option>";
            devuelvis = devuelvis + "<option value='Escazú'>Escazú</option>";
            devuelvis = devuelvis + "<option value='Desamparados'>Desamparados</option>";
            devuelvis = devuelvis + "<option value='Puriscal'>Puriscal</option>";
            devuelvis = devuelvis + "<option value='Tarrazú'>Tarrazú</option>";
            devuelvis = devuelvis + "<option value='Aserrí'>Aserrí</option>";
           
            devuelvis = devuelvis + "<option value='Mora'>Mora</option>";
            devuelvis = devuelvis + "<option value='Goicoechea'>Goicoechea</option>";
            devuelvis = devuelvis + "<option value='Santa Ana'>Santa Ana</option>";
            devuelvis = devuelvis + "<option value='Alajuelita'>Alajuelita</option>";
            devuelvis = devuelvis + "<option value='Vázquez de Coronado'>Vázquez de Coronado</option>";
            devuelvis = devuelvis + "<option value='Acosta'>Acosta</option>";
            
            devuelvis = devuelvis + "<option value='Tibás'>Tibás</option>";
            devuelvis = devuelvis + "<option value='Moravia'>Moravia</option>";
            devuelvis = devuelvis + "<option value='Montes de Oca'>Montes de Oca</option>";
            devuelvis = devuelvis + "<option value='Turrubares'>Turrubares</option>";
           
            devuelvis = devuelvis + "<option value='Dota'>Dota</option>";
            
            devuelvis = devuelvis + "<option value='Curridabat'>Curridabat</option>";
            devuelvis = devuelvis + "<option value='Pérez Zeledón'>Pérez Zeledón</option>";
            devuelvis = devuelvis + "<option value='León Cortés'>León Cortés</option>";
            break;
        case "Heredia":
            devuelvis = devuelvis + "<option value='Heredia'>Heredia</option>";
            devuelvis = devuelvis + "<option value='Barva'>Barva</option>";
            devuelvis = devuelvis + "<option value='Santo Domingo'>Santo Domingo</option>";
            devuelvis = devuelvis + "<option value='Santa Bárbara'>Santa Bárbara</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='Belén'>Belén</option>";
          
            devuelvis = devuelvis + "<option value='Flores'>Flores</option>";
            devuelvis = devuelvis + "<option value='San Pablo'>San Pablo</option>";
            devuelvis = devuelvis + "<option value='Sarapiquí'>Sarapiquí</option>";
            break;
        case "Alajuela":
            devuelvis = devuelvis + "<option value='Alajuela'>Alajuela</option>";
            devuelvis = devuelvis + "<option value='San Ramón'>San Ramón</option>";
      
            devuelvis = devuelvis + "<option value='Grecia'>Grecia</option>";
            devuelvis = devuelvis + "<option value='San Mateo'>San Mateo</option>";
            devuelvis = devuelvis + "<option value='Atenas'>Atenas</option>";
            devuelvis = devuelvis + "<option value='Naranjo'>Naranjo</option>";
            devuelvis = devuelvis + "<option value='Palmares'>Palmares</option>";
            devuelvis = devuelvis + "<option value='Poás'>Poás</option>";
            devuelvis = devuelvis + "<option value='Orotina'>Orotina</option>";
           
            devuelvis = devuelvis + "<option value='San Carlos'>San Carlos</option>";
            devuelvis = devuelvis + "<option value='Zarcero'>Zarcero</option>";
            devuelvis = devuelvis + "<option value='Valverde Vega'>Valverde Vega</option>";
            devuelvis = devuelvis + "<option value='Upala'>Upala</option>";
           
            
            devuelvis = devuelvis + "<option value='Los Chiles'>Los Chiles</option>";
            devuelvis = devuelvis + "<option value='Guatuso'>Guatuso</option>";
            break;
        case "Cartago":
            devuelvis = devuelvis + "<option value='Cartago'>Cartago</option>";
            devuelvis = devuelvis + "<option value='Paraíso'>Paraíso</option>";
            devuelvis = devuelvis + "<option value='La Unión'>La Unión</option>";
            devuelvis = devuelvis + "<option value='Jiménez'>Jiménez</option>";
            devuelvis = devuelvis + "<option value='Turrialba'>Turrialba</option>";
           
            devuelvis = devuelvis + "<option value='Alvarado'>Alvarado</option>";
            devuelvis = devuelvis + "<option value='Oreamuno'>Oreamuno</option>";
            devuelvis = devuelvis + "<option value='El Guarco'>El Guarco</option>";
            break;
        case "Guanacaste":
            devuelvis = devuelvis + "<option value='Liberia'>Liberia</option>";
            devuelvis = devuelvis + "<option value='Nicoya'>Nicoya</option>";
          
            devuelvis = devuelvis + "<option value='Santa Cruz'>Santa Cruz</option>";
            devuelvis = devuelvis + "<option value='Bagaces'>Bagaces</option>";
            devuelvis = devuelvis + "<option value='Carrillo'>Carrillo</option>";
            devuelvis = devuelvis + "<option value='Cañas'>Cañas</option>";
            devuelvis = devuelvis + "<option value='Abangares'>Abangares</option>";
         
            devuelvis = devuelvis + "<option value='Tilarán'>Tilarán</option>";
            devuelvis = devuelvis + "<option value='Nandayure'>Nandayure</option>";
            devuelvis = devuelvis + "<option value='La Cruz'>La Cruz</option>";
            devuelvis = devuelvis + "<option value='Hojancha'>Hojancha</option>";
            break;
        case "Limon":
            devuelvis = devuelvis + "<option value='Limón'>Limón</option>";
            devuelvis = devuelvis + "<option value='Pococí'>Pococí</option>";
            devuelvis = devuelvis + "<option value='Siquirres'>Siquirres</option>";
            devuelvis = devuelvis + "<option value='Talamanca'>Talamanca</option>";
            devuelvis = devuelvis + "<option value='Matina'>Matina</option>";
            devuelvis = devuelvis + "<option value='Guácimo'>Guácimo</option>";
            break;
        case "Puntarenas":
            devuelvis = devuelvis + "<option value='Puntarenas'>Puntarenas</option>";
            devuelvis = devuelvis + "<option value='Esparza'>Esparza</option>";
            devuelvis = devuelvis + "<option value='Buenos Aires'>Buenos Aires</option>";
          
            devuelvis = devuelvis + "<option value='Montes de Oro'>Montes de Oro</option>";
            devuelvis = devuelvis + "<option value='Osa'>Osa</option>";
            devuelvis = devuelvis + "<option value='Quepos'>Quepos</option>";
            devuelvis = devuelvis + "<option value='Golfito'>Golfito</option>";
            devuelvis = devuelvis + "<option value='Coto Brus'>Coto Brus</option>";
            devuelvis = devuelvis + "<option value='Parrita'>Parrita</option>";
            devuelvis = devuelvis + "<option value='Corredores'>Corredores</option>";
            devuelvis = devuelvis + "<option value='Garabito'>Garabito</option>";
         
    }
    return devuelvis;
}



function devuelvedistritos(canton) {
    var devuelvis = "<option value='0' selected >Todos los distritos</option>";
    switch (canton) {
       

        case 'San José':
            devuelvis = devuelvis + "<option value='Carmen'>Carmen</option>";
           
            devuelvis = devuelvis + "<option value='Merced'>Merced</option>";
            devuelvis = devuelvis + "<option value='Hospital'>Hospital</option>";
            devuelvis = devuelvis + "<option value='Catedral'>Catedral</option>";
            devuelvis = devuelvis + "<option value='Zapote'>Zapote</option>";
            devuelvis = devuelvis + "<option value='San Francisco de Dos Ríos'>San Francisco de Dos Ríos</option>";
            devuelvis = devuelvis + "<option value='Uruca'>Uruca</option>";
            devuelvis = devuelvis + "<option value='Mata Redonda'>Mata Redonda</option>";
            devuelvis = devuelvis + "<option value='Pavas'>Pavas</option>";
            devuelvis = devuelvis + "<option value='Hatillo'>Hatillo</option>";
            devuelvis = devuelvis + "<option value='San Sebastían'>San Sebastían</option>";
            break;
        case 'Escazú':
            devuelvis = devuelvis + "<option value='Escazu'>Escazu</option>";

            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            break;
        case 'Desamparados':

            devuelvis = devuelvis + "<option value='Desamparados'>Desamparados</option>";
         
            devuelvis = devuelvis + "<option value='San Miguel'>San Miguel</option>";
         
            devuelvis = devuelvis + "<option value='San Rafael Arriba'>San Rafael Arriba'</option>";
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            devuelvis = devuelvis + "<option value='Rosario'>Rosario</option>";
            devuelvis = devuelvis + "<option value='San Rafael Abajo'>San Rafael Abajo</option>";
            devuelvis = devuelvis + "<option value='Los Guido'>Los Guido</option>";
            break;
        case 'Puriscal':
            devuelvis = devuelvis + "<option value='Santiago'>Santiago</option>";
         
            devuelvis = devuelvis + "<option value='Mercedes Sur'>Mercedes Sur</option>";
            devuelvis = devuelvis + "<option value='Grifo Alto'>Grifo Alto</option>";
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            devuelvis = devuelvis + "<option value='Chires'>Chires</option>";
            break;
        case 'Tarrazú':
            devuelvis = devuelvis + "<option value='San Marcos'>San Marcos'</option>";

            devuelvis = devuelvis + "<option value='San Lorenzo'>San Lorenzo</option>";
            devuelvis = devuelvis + "<option value='San Carlos'>San Carlos</option>";
            break;
        case 'Aserrí':
            devuelvis = devuelvis + "<option value='Aserrí'>Aserrí</option>";
          
            devuelvis = devuelvis + "<option value='Tarbaca'>Tarbaca</option>";
            devuelvis = devuelvis + "<option value='Vuelta de Jorco'>Vuelta de Jorco</option>";
            devuelvis = devuelvis + "<option value='San Gabriel'>San Gabriel</option>";
            devuelvis = devuelvis + "<option value='Legua'>Legua</option>";
            devuelvis = devuelvis + "<option value='Monterrey'>Monterrey</option>";
            devuelvis = devuelvis + "<option value='Salitrillos'>Salitrillos</option>";
            break;

        case 'Mora':
            devuelvis = devuelvis + "<option value='Colón'>Colón</option>";
         
            devuelvis = devuelvis + "<option value='Guayabo'>Guayabo</option>";
            devuelvis = devuelvis + "<option value='Tabarcia'>Tabarcia</option>";
            devuelvis = devuelvis + "<option value='Piedras Negras'>Piedras Negras</option>";
            devuelvis = devuelvis + "<option value='Picagres'>Picagres</option>";
            devuelvis = devuelvis + "<option value='Jaris'>Jaris</option>";
            break;
        case 'Goicoechea':
            devuelvis = devuelvis + "<option value='Guadalupe'>Guadalupe</option>";
          
            devuelvis = devuelvis + "<option value='San Francisco'>San Francisco</option>";
            devuelvis = devuelvis + "<option value='Calle Blancos'>Calle Blancos</option>";
            devuelvis = devuelvis + "<option value='Mata de Plátano'>Mata de Plátano</option>";
       
            devuelvis = devuelvis + "<option value='Ipís'>Ipís</option>";
            devuelvis = devuelvis + "<option value='Rancho Redondo'>Rancho Redondo</option>";
            devuelvis = devuelvis + "<option value='Purral'>Purral</option>";
            break;
        case 'Santa Ana':
            devuelvis = devuelvis + "<option value='Santa Ana'>Santa Ana</option>";
    
            devuelvis = devuelvis + "<option value='Salitral'>Salitral</option>";
            devuelvis = devuelvis + "<option value='Pozos'>Pozos</option>";
            devuelvis = devuelvis + "<option value='Uruca'>Uruca</option>";
        
            devuelvis = devuelvis + "<option value='Piedades'>Piedades</option>";
            devuelvis = devuelvis + "<option value='Brasil'>Brasil</option>";
            break;
        case 'Alajuelita':
            devuelvis = devuelvis + "<option value='Alajuelita'>Alajuelita</option>";
    
            devuelvis = devuelvis + "<option value='San Josecito'>San Josecito</option>";
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            devuelvis = devuelvis + "<option value='Concepción'>Concepción</option>";
            devuelvis = devuelvis + "<option value='San Felipe'>San Felipe</option>";
            break;
        case 'Vázquez de Coronado':
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
  
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='Dulce Nombre de Jesús'>Dulce Nombre de Jesús</option>";
            devuelvis = devuelvis + "<option value='Patalillo'>Patalillo</option>";
  
       
            devuelvis = devuelvis + "<option value='Cascajal'>Cascajal</option>";
            break;
        case 'Acosta':
            devuelvis = devuelvis + "<option value='San Ignacio'>San Ignacio</option>";
 
            devuelvis = devuelvis + "<option value='Guaitil'>Guaitil</option>";
            devuelvis = devuelvis + "<option value='Palmichal'>Palmichal</option>";
            devuelvis = devuelvis + "<option value='Cangrejal'>Cangrejal</option>";
            devuelvis = devuelvis + "<option value='Sabanillas'>Sabanillas</option>";
            break;

        case 'Tibás':
            devuelvis = devuelvis + "<option value='San Juan'></option>";
           
            devuelvis = devuelvis + "<option value='Cinco Esquinas'></option>";
            devuelvis = devuelvis + "<option value='Anselmo Llorente'></option>";
      
            devuelvis = devuelvis + "<option value='León XIII'></option>";
            devuelvis = devuelvis + "<option value='Colima'></option>";
            break;
        case 'Moravia':
            devuelvis = devuelvis + "<option value='San Vicente'>San Vicente</option>";
           
            devuelvis = devuelvis + "<option value='San Jerónimo'>San Jerónimo</option>";
            devuelvis = devuelvis + "<option value='La Trinidad'>'La Trinidad</option>";
            break;
        case 'Montes de Oca':
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
         
            devuelvis = devuelvis + "<option value='Sabanilla'>Sabanilla</option>";
            devuelvis = devuelvis + "<option value='Mercedes'>Mercedes</option>";
        
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            break;
        case 'Turrubares':
            devuelvis = devuelvis + "<option value='San Pablo'>San Pablo</option>";
        
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
            devuelvis = devuelvis + "<option value='San Juan de Mata'>San Juan de Mata</option>";
            devuelvis = devuelvis + "<option value='San Luis'>San Luis</option>";
            devuelvis = devuelvis + "<option value='Carara'>Carara</option>";
            break;

        case 'Dota':
            devuelvis = devuelvis + "<option value='Santa María'>Santa María</option>";
            devuelvis = devuelvis + "<option value='El Jardín'>El Jardín</option>";
            devuelvis = devuelvis + "<option value='Copey'>Copey</option>";
            break;

        case 'Curridabat':
            devuelvis = devuelvis + "<option value='Curridabat'>Curridabat</option>";
           
            devuelvis = devuelvis + "<option value='Granadilla'>Granadilla</option>";
            devuelvis = devuelvis + "<option value='Sánchez'>Sánchez</option>";
            devuelvis = devuelvis + "<option value='Tirrases'>Tirrases</option>";
            break;
        case 'Pérez Zeledón':
            devuelvis = devuelvis + "<option value='San Isidro de El General'>San Isidro de El General</option>";
           
            devuelvis = devuelvis + "<option value='El General'>El General</option>";
            devuelvis = devuelvis + "<option value='Daniel Flores'>Daniel Flores'</option>";
           
            devuelvis = devuelvis + "<option value='Rivas'>Rivas</option>";
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
            devuelvis = devuelvis + "<option value='Platanares'>Platanares</option>";
           
            devuelvis = devuelvis + "<option value='Pejibaye'>Pejibaye</option>";
            devuelvis = devuelvis + "<option value='Cajón'>Cajón</option>";
            devuelvis = devuelvis + "<option value='Barú'>Barú</option>";
           
            devuelvis = devuelvis + "<option value='Río Nuevo'>Río Nuevo</option>";
          
            devuelvis = devuelvis + "<option value='Páramo'>Páramo</option>";
          
            devuelvis = devuelvis + "<option value='La Amistad'>La Amistad</option>";
            break;
        case 'León Cortés':
            devuelvis = devuelvis + "<option value='San Pablo'>San Pablo</option>";
     
            devuelvis = devuelvis + "<option value='San Andrés'>San Andrés</option>";
            devuelvis = devuelvis + "<option value='Llano Bonito'>Llano Bonito</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='Santa Cruz'>Santa Cruz</option>";
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            break;
         
        case 'Heredia':
            devuelvis = devuelvis + "<option value='Heredia'>Heredia</option>";
       
            devuelvis = devuelvis + "<option value='Mercedes'>Mercedes</option>";
            devuelvis = devuelvis + "<option value='San Francisco'>San Francisco</option>";
          
            devuelvis = devuelvis + "<option value='Ulloa'>Ulloa</option>";
            devuelvis = devuelvis + "<option value='Varablanca'>Varablanca</option>";
            break;
        case 'Barva':
            devuelvis = devuelvis + "<option value='Barva'>Barva</option>";
         
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
            devuelvis = devuelvis + "<option value='San Pablo'>San Pablo</option>";
            devuelvis = devuelvis + "<option value='San Roque'>San Roque</option>";
            devuelvis = devuelvis + "<option value='Santa Lucía'>Santa Lucía</option>";
            devuelvis = devuelvis + "<option value='San José de la Montaña'>San José de la Montaña</option>";
            break;
        case 'Santo Domingo':
            devuelvis = devuelvis + "<option value='Santo Domingo'>Santo Domingo</option>";
            devuelvis = devuelvis + "<option value='San Vicente'>San Vicente</option>";
            devuelvis = devuelvis + "<option value='San Miguel'>San Miguel</option>";
      
            devuelvis = devuelvis + "<option value='Paracito'>Paracito</option>";
            devuelvis = devuelvis + "<option value='Santo Tomás'>Santo Tomás</option>";
            devuelvis = devuelvis + "<option value='Santa Rosa'>Santa Rosa</option>";
            devuelvis = devuelvis + "<option value='Tures'>Tures</option>";
            devuelvis = devuelvis + "<option value='Pará'>Pará</option>";
            break;
        case 'Santa Bárbara':
            devuelvis = devuelvis + "<option value='Santa Bárbara'>Santa Bárbara</option>";
      
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
            devuelvis = devuelvis + "<option value='San Juan'>San Juan</option>";
            devuelvis = devuelvis + "<option value='Jesús'>Jesús</option>";
         
            devuelvis = devuelvis + "<option value='Santo Domingo '>Santo Domingo </option>";
            devuelvis = devuelvis + "<option value='Purabá'>Purabá</option>";
            break;
        case 'San Rafael':
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
       
            devuelvis = devuelvis + "<option value='San Josecito'>San Josecito</option>";
            devuelvis = devuelvis + "<option value='Santiago'>Santiago</option>";
            devuelvis = devuelvis + "<option value='Ángeles'>Ángeles</option>";
            devuelvis = devuelvis + "<option value='Concepción'>Concepción</option>";
            break;
        case 'San Isidro':
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
         
            devuelvis = devuelvis + "<option value='San José'>San José</option>";
       
            devuelvis = devuelvis + "<option value='Concepción'>Concepción</option>";
           
            devuelvis = devuelvis + "<option value='San Francisco'>San Francisco</option>";
            break;
        case 'Belén':
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
         
            devuelvis = devuelvis + "<option value='La Ribera'>La Ribera</option>";
            devuelvis = devuelvis + "<option value='La Asunción'>La Asunción</option>";
            break;

        case 'Flores':
            devuelvis = devuelvis + "<option value='San Joaquín'>San Joaquín</option>";
            
            
            devuelvis = devuelvis + "<option value='Barrantes '>Barrantes</option>";
            devuelvis = devuelvis + "<option value='Llorente'>Llorente</option>";
            break;
        case 'San Pablo':
            devuelvis = devuelvis + "<option value='San Pablo'>San Pablo</option>";
            devuelvis = devuelvis + "<option value='Rincón de Sabanilla'>Rincón de Sabanilla</option>";
            break;
        case 'Sarapiquí':
            devuelvis = devuelvis + "<option value='Puerto Viejo'>Puerto Viejo</option>";
            devuelvis = devuelvis + "<option value='La Virgen'>La Virgen</option>";
           
            devuelvis = devuelvis + "<option value='Las Horquetas'>Las Horquetas</option>";
            devuelvis = devuelvis + "<option value='Llanuras del Gaspar'>Llanuras del Gaspar</option>";
            devuelvis = devuelvis + "<option value='Cureña'>Cureña</option>";
            break;
        
        case 'Alajuela':
            devuelvis = devuelvis + "<option value='Alajuela'>Alajuela</option>";
            devuelvis = devuelvis + "<option value='San José'>San José</option>";
            devuelvis = devuelvis + "<option value='Carrizal'>Carrizal</option>";
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            devuelvis = devuelvis + "<option value='Guácima'>Guácima</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='Sabanilla'>Sabanilla</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='Río Segundo'>Río Segundo</option>";
            devuelvis = devuelvis + "<option value='Desamparados'>Desamparados</option>";
            devuelvis = devuelvis + "<option value='Turrúcares'>Turrúcares</option>";
            devuelvis = devuelvis + "<option value='Garita'>Garita</option>";
            devuelvis = devuelvis + "<option value='Sarapiquí '>Sarapiquí</option>";
            devuelvis = devuelvis + "<option value='Tambor'>Tambor</option>";
            break;
        case 'San Ramón':
            devuelvis = devuelvis + "<option value='San Ramón'>San Ramón</option>";
            devuelvis = devuelvis + "<option value='Santiago'>Santiago</option>";
            devuelvis = devuelvis + "<option value='San Juan'>San Juan</option>";
            devuelvis = devuelvis + "<option value='Piedades Norte'>Piedades Norte</option>";
            devuelvis = devuelvis + "<option value='Piedades Sur'>Piedades Sur</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='Ángeles'>Ángeles</option>";
            devuelvis = devuelvis + "<option value='Volio'>Volio</option>";
            devuelvis = devuelvis + "<option value='Concepción'>Concepción</option>";
            devuelvis = devuelvis + "<option value='Zapotal'>Zapotal</option>";
            devuelvis = devuelvis + "<option value='Peñas Blancas'>Peñas Blancas</option>";
            break;

        case 'Grecia':
            devuelvis = devuelvis + "<option value='Grecia'>Grecia</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='San José'>San José</option>";
            devuelvis = devuelvis + "<option value='San Roque'>San Roque</option>";
            devuelvis = devuelvis + "<option value='Tacares'>Tacares</option>";
            devuelvis = devuelvis + "<option value='Río Cuarto'>Río Cuarto</option>";
            devuelvis = devuelvis + "<option value='Puente de Piedra'>Puente de Piedra</option>";
            devuelvis = devuelvis + "<option value='Bolívar'>Bolívar</option>";
            break;
        case 'San Mateo':
            devuelvis = devuelvis + "<option value='San Mateo'>San Mateo</option>";
            devuelvis = devuelvis + "<option value='Desmonte'>Desmonte</option>";
            devuelvis = devuelvis + "<option value='Jesús María'>Jesús María</option>";
            devuelvis = devuelvis + "<option value='Labrador'>Labrador</option>";
            break;
        case 'Atenas':
            devuelvis = devuelvis + "<option value='Atenas'>Atenas</option>";
            devuelvis = devuelvis + "<option value='Jesús'>Jesús</option>";
            devuelvis = devuelvis + "<option value='Mercedes'>Mercedes</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='Concepción'>Concepción</option>";
            devuelvis = devuelvis + "<option value='San José'>San José</option>";
            devuelvis = devuelvis + "<option value='Santa Eulalia'>Santa Eulalia</option>";
            devuelvis = devuelvis + "<option value='Escobal'>Escobal</option>";
            break;
        case 'Naranjo':
            devuelvis = devuelvis + "<option value='Naranjo'>Naranjo</option>";
            devuelvis = devuelvis + "<option value='San Miguel'>San Miguel</option>";
            devuelvis = devuelvis + "<option value='San José'>San José</option>";
            devuelvis = devuelvis + "<option value='Cirrí Sur'>Cirrí Sur</option>";
            devuelvis = devuelvis + "<option value='San Jerónimo'>San Jerónimo</option>";
            devuelvis = devuelvis + "<option value='San Juan'>San Juan</option>";
            devuelvis = devuelvis + "<option value='El Rosario'>El Rosario</option>";
            devuelvis = devuelvis + "<option value='Palmitos'>Palmitos</option>";
            break;
        case 'Palmares':
            devuelvis = devuelvis + "<option value='Palmares'>Palmares</option>";
            devuelvis = devuelvis + "<option value='Zaragoza'>Zaragoza</option>";
            devuelvis = devuelvis + "<option value=' Buenos Aires'>Buenos Aires</option>";
            devuelvis = devuelvis + "<option value='Santiago'>Santiago</option>";
            devuelvis = devuelvis + "<option value='Candelaria'>Candelaria</option>";
            devuelvis = devuelvis + "<option value='Esquipulas'>Esquipulas</option>";
            devuelvis = devuelvis + "<option value='La Granja'>La Granja</option>";
            break;
        case 'Poás':
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
            devuelvis = devuelvis + "<option value='San Juan '>San Juan</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='Carrillos'>Carrillos</option>";
            devuelvis = devuelvis + "<option value='Sabana Redonda'>Sabana Redonda</option>";
            break;
        case 'Orotina':
            devuelvis = devuelvis + "<option value='Orotina'>Orotina</option>";
            devuelvis = devuelvis + "<option value='El Mastate'>El Mastate</option>";
            devuelvis = devuelvis + "<option value='Hacienda Vieja'>Hacienda Vieja</option>";
            devuelvis = devuelvis + "<option value='Coyolar'>Coyolar</option>";
            devuelvis = devuelvis + "<option value='La Ceiba'>La Ceiba</option>";
            break;

        case 'San Carlos':
            devuelvis = devuelvis + "<option value='Quesada'>Quesada</option>";
            devuelvis = devuelvis + "<option value='Florencia'>Florencia</option>";
            devuelvis = devuelvis + "<option value='Buenavista'>Buenavista</option>";
            devuelvis = devuelvis + "<option value='Aguas Zarcas'>Aguas Zarcas</option>";
            devuelvis = devuelvis + "<option value='Venecia'>Venecia</option>";
            devuelvis = devuelvis + "<option value='Pital'>Pital</option>";
            devuelvis = devuelvis + "<option value='La Fortuna'>La Fortuna</option>";
            devuelvis = devuelvis + "<option value='La Tigra'>La Tigra</option>";
            devuelvis = devuelvis + "<option value='La Palmera'>La Palmera</option>";
            devuelvis = devuelvis + "<option value='Venado'>Venado</option>";
            devuelvis = devuelvis + "<option value='Cutris'>Cutris</option>";
            devuelvis = devuelvis + "<option value='Monterrey'>Monterrey</option>";
            devuelvis = devuelvis + "<option value='Pocosol'>Pocosol</option>";
            break;
        case 'Zarcero':
            devuelvis = devuelvis + "<option value='Zarcero'>Zarcero</option>";
            devuelvis = devuelvis + "<option value='Laguna'>Laguna</option>";
            devuelvis = devuelvis + "<option value='Tapesco'>Tapesco</option>";
            devuelvis = devuelvis + "<option value='Guadalupe'>Guadalupe</option>";
            devuelvis = devuelvis + "<option value='Zapote'>Zapote</option>";
            devuelvis = devuelvis + "<option value='Brisas'>Brisas</option>";
            devuelvis = devuelvis + "<option value='Palmira'>Palmira</option>";
            break;
        case 'Valverde Vega':
            devuelvis = devuelvis + "<option value='Sarchí Norte'>Sarchí Norte</option>";
            devuelvis = devuelvis + "<option value='Sarchí Sur'>Sarchí Sur</option>";
            devuelvis = devuelvis + "<option value='Toro Amarillo'>Toro Amarillo</option>";
            devuelvis = devuelvis + "<option value='San Pedro'>San Pedro</option>";
            devuelvis = devuelvis + "<option value='Rodríguez'>Rodríguez</option>";
            break;
        case 'Upala':
            devuelvis = devuelvis + "<option value='Upala'>Upala</option>";
            devuelvis = devuelvis + "<option value='Aguas Claras'>Aguas Claras</option>";
            devuelvis = devuelvis + "<option value='San José o Pizote'>San José o Pizote</option>";
            devuelvis = devuelvis + "<option value='Bijagua'>Bijagua</option>";
            devuelvis = devuelvis + "<option value='Delicias'>Delicias</option>";
            devuelvis = devuelvis + "<option value='Dos Ríos'>Dos Ríos</option>";
            devuelvis = devuelvis + "<option value='Yolillal '>Yolillal</option>";
            devuelvis = devuelvis + "<option value='Canalete'>Canalete</option>";
            break;


        case 'Los Chiles':
            devuelvis = devuelvis + "<option value='Los Chiles'>Los Chiles</option>";
            devuelvis = devuelvis + "<option value='Caño Negro'>Caño Negro</option>";
            devuelvis = devuelvis + "<option value='El Amparo'>El Amparo</option>";
            devuelvis = devuelvis + "<option value='San Jorge'>San Jorge</option>";
            break;
        case 'Guatuso':
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='Buenavista'>Buenavista</option>";
            devuelvis = devuelvis + "<option value='Cote'>Cote</option>";
            devuelvis = devuelvis + "<option value='Katira'>Katira</option>";
            break;
          
        case 'Cartago':
            devuelvis = devuelvis + "<option value='Oriental'>Oriental</option>";
            devuelvis = devuelvis + "<option value='Occidental '>Occidental</option>";
            devuelvis = devuelvis + "<option value='Carmen'>Carmen</option>";
            devuelvis = devuelvis + "<option value='San Nicolás'>San Nicolás</option>";
            devuelvis = devuelvis + "<option value='Aguacaliente o San Francisco'>Aguacaliente o San Francisco</option>";
            devuelvis = devuelvis + "<option value='Guadalupe o Arenilla'>Guadalupe o Arenilla</option>";
            devuelvis = devuelvis + "<option value='Corralillo'>Corralillo</option>";
            devuelvis = devuelvis + "<option value='Tierra Blanca'>Tierra Blanca</option>";
            devuelvis = devuelvis + "<option value='Dulce Nombre'>Dulce Nombre</option>";
            devuelvis = devuelvis + "<option value='Llano Grande'>Llano Grande</option>";
            devuelvis = devuelvis + "<option value='Quebradilla'>Quebradilla</option>";
            break;
        case 'Paraíso':
            devuelvis = devuelvis + "<option value='Paraíso'>Paraíso</option>";
            devuelvis = devuelvis + "<option value='Santiago'>Santiago</option>";
            devuelvis = devuelvis + "<option value='Orosi'>Orosi</option>";
            devuelvis = devuelvis + "<option value='Cachí'>Cachí</option>";
            devuelvis = devuelvis + "<option value='Llanos de Santa Lucía'>Llanos de Santa Lucía</option>";
            break;
        case 'La Unión':
            devuelvis = devuelvis + "<option value='Tres Ríos'>Tres Ríos</option>";
            devuelvis = devuelvis + "<option value='San Diego'>San Diego</option>";
            devuelvis = devuelvis + "<option value='San Juan'>San Juan</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='Concepción'>Concepción</option>";
            devuelvis = devuelvis + "<option value='Dulce Nombre'>Dulce Nombre</option>";
            devuelvis = devuelvis + "<option value='San Ramón'>San Ramón</option>";
            devuelvis = devuelvis + "<option value='Río Azul'>Río Azul</option>";
            break;
        case 'Jiménez':
            devuelvis = devuelvis + "<option value='Juan Viñas'>Juan Viñas</option>";
            devuelvis = devuelvis + "<option value='Tucurrique'>Tucurrique</option>";
            devuelvis = devuelvis + "<option value='Pejibaye'>Pejibaye</option>";
            break;
        case 'Turrialba':
            devuelvis = devuelvis + "<option value='Turrialba'>Turrialba</option>";
            devuelvis = devuelvis + "<option value='La Suiza'>La Suiza</option>";
            devuelvis = devuelvis + "<option value='Peralta'>Peralta</option>";
            devuelvis = devuelvis + "<option value='Santa Cruz'>Santa Cruz</option>";
            devuelvis = devuelvis + "<option value='Santa Teresita'>Santa Teresita</option>";
            devuelvis = devuelvis + "<option value='Pavones'>Pavones</option>";
            devuelvis = devuelvis + "<option value='Tuis'>Tuis</option>";
            devuelvis = devuelvis + "<option value='Tayutic'>Tayutic</option>";
            devuelvis = devuelvis + "<option value='Santa Rosa'>Santa Rosa</option>";
            devuelvis = devuelvis + "<option value='Tres Equis'>Tres Equis</option>";
            devuelvis = devuelvis + "<option value='La Isabel'>La Isabel</option>";
            devuelvis = devuelvis + "<option value='Chirripó'>Chirripó</option>";
            break;

        case 'Alvarado':
            devuelvis = devuelvis + "<option value='Pacayas'>Pacayas</option>";
            devuelvis = devuelvis + "<option value='Cervantes'>Cervantes</option>";
            devuelvis = devuelvis + "<option value='Capellades'>Capellades</option>";
            break;
        case 'Oreamuno':
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='Cot'>Cot</option>";
            devuelvis = devuelvis + "<option value='Potrero Cerrado'>Potrero Cerrado</option>";
            devuelvis = devuelvis + "<option value='Cipreses'>Cipreses</option>";
            devuelvis = devuelvis + "<option value='Santa Rosa'>Santa Rosa</option>";
            break;
        case 'El Guarco':
            devuelvis = devuelvis + "<option value='El Tejar'>El Tejar</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            devuelvis = devuelvis + "<option value='Tobosi'>Tobosi</option>";
            devuelvis = devuelvis + "<option value='Patio de Agua'>Patio de Agua</option>";
            break;
          
        case 'Liberia':
            devuelvis = devuelvis + "<option value='Liberia'>Liberia</option>";
            devuelvis = devuelvis + "<option value='Cañas Dulces'>Cañas Dulces</option>";
            devuelvis = devuelvis + "<option value='Mayorga'>Mayorga</option>";
            devuelvis = devuelvis + "<option value='Nacascolo'>Nacascolo</option>";
            devuelvis = devuelvis + "<option value='Curubandé'>Curubandé</option>";
            break;
        case 'Nicoya':
            devuelvis = devuelvis + "<option value='Nicoya'>Nicoya</option>";
            devuelvis = devuelvis + "<option value='Mansión'>Mansión</option>";
            devuelvis = devuelvis + "<option value='San Antonio'>San Antonio</option>";
            devuelvis = devuelvis + "<option value='Quebrada Honda'>Quebrada Honda</option>";
            devuelvis = devuelvis + "<option value='Sámara'>Sámara</option>";
            devuelvis = devuelvis + "<option value='Nosara'>Nosara</option>";
            devuelvis = devuelvis + "<option value='Belén de Nosarita'>Belén de Nosarita</option>";
            break;

        case 'Santa Cruz':
            devuelvis = devuelvis + "<option value='Santa Cruz'>Santa Cruz</option>";
            devuelvis = devuelvis + "<option value='Bolsón'>Bolsón</option>";
            devuelvis = devuelvis + "<option value='Veintisiete de Abril'>Veintisiete de Abril</option>";
            devuelvis = devuelvis + "<option value='Tempate'>Tempate</option>";
            devuelvis = devuelvis + "<option value='Cartagena'>Cartagena</option>";
            devuelvis = devuelvis + "<option value='Cuajiniquil'>Cuajiniquil</option>";
            devuelvis = devuelvis + "<option value='Diriá'>Diriá</option>";
            devuelvis = devuelvis + "<option value='Cabo Velas'>Cabo Velas</option>";
            devuelvis = devuelvis + "<option value='Tamarindo'>Tamarindo</option>";
            break;
        case 'Bagaces':
            devuelvis = devuelvis + "<option value='Bagaces'>Bagaces</option>";
            devuelvis = devuelvis + "<option value='La Fortuna'>La Fortuna</option>";
            devuelvis = devuelvis + "<option value='Mogote'>Mogote</option>";
            devuelvis = devuelvis + "<option value='Río Naranjo'>Río Naranjo</option>";
            break;
        case 'Carrillo':
            devuelvis = devuelvis + "<option value='Filadelfia'>Filadelfia</option>";
            devuelvis = devuelvis + "<option value='Palmira'>Palmira</option>";
            devuelvis = devuelvis + "<option value='Sardinal'>Sardinal</option>";
            devuelvis = devuelvis + "<option value='Belén'>Belén</option>";
            break;
        case 'Cañas':
            devuelvis = devuelvis + "<option value='Cañas'>Cañas</option>";
            devuelvis = devuelvis + "<option value='Palmira'>Palmira</option>";
            devuelvis = devuelvis + "<option value='San Miguel'>San Miguel</option>";
            devuelvis = devuelvis + "<option value='Bebedero'>Bebedero</option>";
            devuelvis = devuelvis + "<option value='Porozal'>Porozal</option>";
            break;
        case 'Abangares':
            devuelvis = devuelvis + "<option value='Las Juntas'>Las Juntas</option>";
            devuelvis = devuelvis + "<option value='Sierra'>Sierra</option>";
            devuelvis = devuelvis + "<option value='San Juan'>San Juan</option>";
            devuelvis = devuelvis + "<option value='Colorado'>Colorado</option>";
            break;

        case 'Tilarán':
            devuelvis = devuelvis + "<option value='Tilarán'>Tilarán</option>";
            devuelvis = devuelvis + "<option value='Quebrada Grande'>Quebrada Grande</option>";
            devuelvis = devuelvis + "<option value='Tronadora'>Tronadora</option>";
            devuelvis = devuelvis + "<option value='Santa Rosa'>Santa Rosa</option>";
            devuelvis = devuelvis + "<option value='Líbano'>Líbano</option>";
            devuelvis = devuelvis + "<option value='Tierras Morenas'>Tierras Morenas</option>";
            devuelvis = devuelvis + "<option value='Arenal'>Arenal</option>";
            break;
        case 'Nandayure':
            devuelvis = devuelvis + "<option value='Carmona'>Carmona</option>";
            devuelvis = devuelvis + "<option value='Santa Rita'>Santa Rita</option>";
            devuelvis = devuelvis + "<option value='Zapotal'>Zapotal</option>";
            devuelvis = devuelvis + "<option value='San Pablo'>San Pablo</option>";
            devuelvis = devuelvis + "<option value='Porvenir'>Porvenir</option>";
            devuelvis = devuelvis + "<option value='Bejuco'>Bejuco</option>";
            break;
        case 'La Cruz':
            devuelvis = devuelvis + "<option value='La Cruz'>La Cruz</option>";
            devuelvis = devuelvis + "<option value='Santa Cecilia'>Santa Cecilia</option>";
            devuelvis = devuelvis + "<option value='La Garita'>La Garita</option>";
            devuelvis = devuelvis + "<option value='Santa Elena'>Santa Elena</option>";
            break;
        case 'Hojancha':
            devuelvis = devuelvis + "<option value='Hojancha'>Hojancha</option>";
            devuelvis = devuelvis + "<option value='Monte Romo'>Monte Romo</option>";
            devuelvis = devuelvis + "<option value='Puerto Carrillo'>Puerto Carrillo</option>";
            devuelvis = devuelvis + "<option value='Huacas'>Huacas</option>";
            break;
          
        case 'Limón':
            devuelvis = devuelvis + "<option value='Limón'>Limón</option>";
            devuelvis = devuelvis + "<option value='Valle La Estrella'>Valle La Estrella</option>";
            devuelvis = devuelvis + "<option value='Río Blanco'>Río Blanco</option>";
            devuelvis = devuelvis + "<option value='Matama'>Matama</option>";
            break;
        case 'Pococí':
            devuelvis = devuelvis + "<option value='Guápiles'>Guápiles</option>";
            devuelvis = devuelvis + "<option value='Jiménez'>Jiménez</option>";
            devuelvis = devuelvis + "<option value='Rita'>Rita</option>";
            devuelvis = devuelvis + "<option value='Roxana'>Roxana</option>";
            devuelvis = devuelvis + "<option value='Cariari'>Cariari</option>";
            devuelvis = devuelvis + "<option value='Colorado '>Colorado</option>";
            devuelvis = devuelvis + "<option value='La Colonia'>La Colonia</option>";
            break;
        case 'Siquirres':
            devuelvis = devuelvis + "<option value='Siquirres'>Siquirres</option>";
            devuelvis = devuelvis + "<option value='Pacuarito'>Pacuarito</option>";
            devuelvis = devuelvis + "<option value='Florida'>Florida</option>";
            devuelvis = devuelvis + "<option value='Germania'>Germania</option>";
            devuelvis = devuelvis + "<option value='El Cairo'>El Cairo</option>";
            devuelvis = devuelvis + "<option value='Alegría'>Alegría</option>";
            break;
        case 'Talamanca':
            devuelvis = devuelvis + "<option value='Bratsi'>Bratsi</option>";
            devuelvis = devuelvis + "<option value='Sixaola'>Sixaola</option>";
            devuelvis = devuelvis + "<option value='Cahuita'>Cahuita</option>";
            devuelvis = devuelvis + "<option value='Telire'>Telire</option>";
            break;
        case 'Matina':
            devuelvis = devuelvis + "<option value='Matina'>Matina</option>";
            devuelvis = devuelvis + "<option value='Batán'>Batán</option>";
            devuelvis = devuelvis + "<option value='Carrandi'>Carrandi</option>";
            break;
        case 'Guácimo':
            devuelvis = devuelvis + "<option value='Guácimo'>Guácimo</option>";
            devuelvis = devuelvis + "<option value='Mercedes '>Mercedes</option>";
            devuelvis = devuelvis + "<option value='Pocora'>Pocora</option>";
            devuelvis = devuelvis + "<option value='Río Jiménez'>Río Jiménez</option>";
            devuelvis = devuelvis + "<option value='Duacarí'>Duacarí</option>";
            break;
          
        case 'Puntarenas':
            devuelvis = devuelvis + "<option value='Duacarí'>Duacarí</option>";
            devuelvis = devuelvis + "<option value='Pitahaya'>Pitahaya</option>";
            devuelvis = devuelvis + "<option value='Chomes'>Chomes</option>";
            devuelvis = devuelvis + "<option value='Lepanto'>Lepanto</option>";
            devuelvis = devuelvis + "<option value='Paquera'>Paquera</option>";
            devuelvis = devuelvis + "<option value='Manzanillo'>Manzanillo</option>";
            devuelvis = devuelvis + "<option value='Guacimal'>Guacimal</option>";
            devuelvis = devuelvis + "<option value='Barranca'>Barranca</option>";
            devuelvis = devuelvis + "<option value='Monte Verde'>Monte Verde</option>";
            devuelvis = devuelvis + "<option value='Isla del Coco'>Isla del Coco</option>";
            devuelvis = devuelvis + "<option value='Cóbano'>Cóbano</option>";
            devuelvis = devuelvis + "<option value='Chacarita'>Chacarita</option>";
            devuelvis = devuelvis + "<option value='Chira'>Chira</option>";
            devuelvis = devuelvis + "<option value='Acapulco'>Acapulco</option>";
            devuelvis = devuelvis + "<option value='El Roble'>El Roble</option>";
            devuelvis = devuelvis + "<option value='Arancibia'>Arancibia</option>";
            break;
        case 'Esparza':
            devuelvis = devuelvis + "<option value='Espíritu Santo'>Espíritu Santo</option>";
            devuelvis = devuelvis + "<option value='San Juan Grande'>San Juan Grande</option>";
            devuelvis = devuelvis + "<option value='Macacona'>Macacona</option>";
            devuelvis = devuelvis + "<option value='San Rafael'>San Rafael</option>";
            devuelvis = devuelvis + "<option value='San Jerónimo'>San Jerónimo</option>";
            break;
        case 'Buenos Aires':
            devuelvis = devuelvis + "<option value='Buenos Aires '>Buenos Aires</option>";
            devuelvis = devuelvis + "<option value='Volcán'>Volcán</option>";
            devuelvis = devuelvis + "<option value='Potrero Grande'>Potrero Grande</option>";
            devuelvis = devuelvis + "<option value='Boruca'>Boruca</option>";
            devuelvis = devuelvis + "<option value='Pilas'>Pilas</option>";
            devuelvis = devuelvis + "<option value='Colinas'>Colinas</option>";
            devuelvis = devuelvis + "<option value='Chánguena'>Chánguena</option>";
            devuelvis = devuelvis + "<option value='Biolley'>Biolley</option>";
            devuelvis = devuelvis + "<option value='Brunka'>Brunka</option>";
            break;

        case 'Montes de Oro':
            devuelvis = devuelvis + "<option value='Miramar'>Miramar</option>";
            devuelvis = devuelvis + "<option value='La Unión'>La Unión</option>";
            devuelvis = devuelvis + "<option value='San Isidro'>San Isidro</option>";
            break;
        case 'Osa':
            devuelvis = devuelvis + "<option value='Puerto Cortés'>Puerto Cortés</option>";
            devuelvis = devuelvis + "<option value='Palmar'>Palmar</option>";
            devuelvis = devuelvis + "<option value='Sierpe'>Sierpe</option>";
            devuelvis = devuelvis + "<option value='Bahía Ballena'>Bahía Ballena</option>";
            devuelvis = devuelvis + "<option value='Piedras Blancas'>Piedras Blancas</option>";
            devuelvis = devuelvis + "<option value='Bahía Drake'>Bahía Drake</option>";
            break;
        case 'Quepos':
            devuelvis = devuelvis + "<option value='Quepos'>Quepos</option>";
            devuelvis = devuelvis + "<option value='Savegre'>Savegre</option>";
            devuelvis = devuelvis + "<option value='Naranjito'>Naranjito</option>";
            break;
        case 'Golfito':
            devuelvis = devuelvis + "<option value='Golfito'>Golfito</option>";
            devuelvis = devuelvis + "<option value='Puerto Jiménez'>Puerto Jiménez</option>";
            devuelvis = devuelvis + "<option value='Guaycará'>Guaycará</option>";
            devuelvis = devuelvis + "<option value='Pavón'>Pavón</option>";
            break;
        case 'Coto Brus':
            devuelvis = devuelvis + "<option value='San Vito'>San Vito</option>";
            devuelvis = devuelvis + "<option value='Sabalito'>Sabalito</option>";
            devuelvis = devuelvis + "<option value='Agua Buena'>Agua Buena</option>";
            devuelvis = devuelvis + "<option value='Limoncito'>Limoncito</option>";
            devuelvis = devuelvis + "<option value='Pittier '>Pittier</option>";
            break;
        case 'Parrita':
            devuelvis = devuelvis + "<option value='Parrita'>Parrita</option>";
            break;
        case 'Corredores':
            devuelvis = devuelvis + "<option value='Corredor '>Corredor</option>";
            devuelvis = devuelvis + "<option value='La Cuesta'>La Cuesta</option>";
            devuelvis = devuelvis + "<option value='Canoas'>Canoas</option>";
            devuelvis = devuelvis + "<option value='Laurel'>Laurel</option>";
            break;
        case 'Garabito':
            devuelvis = devuelvis + "<option value='Jacó'>Jacó</option>";
            devuelvis = devuelvis + "<option value='Tárcoles'>Tárcoles</option>";
            break;

    }
    return devuelvis;
}