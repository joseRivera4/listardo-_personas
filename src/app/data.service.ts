import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices{

    constructor (private httpClient: HttpClient){}
    //cargar personas
    cargarpersonas(){
        return this.httpClient.get('https://listado-personas-8f94f-default-rtdb.firebaseio.com/datos.json');
    }




    //guardar personas
    guardarPersonas(personas: Persona[]){

        this.httpClient.put('https://listado-personas-8f94f-default-rtdb.firebaseio.com/datos.json'
        ,personas).subscribe(response =>console.log("resultado de guardae personas "+ response),
           error => console.log("error al guardar personas: " + error)
    
    );
    }
   //modificar persona

   modificarPersona(index: number, persona: Persona){

    let url: string;
     url = 'https://listado-personas-8f94f-default-rtdb.firebaseio.com/datos/'+ index + '.json'
     this.httpClient.put(url, persona)
     .subscribe(
        response => console.log("resultado modificar persona: " + response)
        , error => console.log("Error al modificar persona: " + error)  
        
     );

   }

   //eliminar persona
  eliminarPersona(index: number){

    let url: string;
     url = 'https://listado-personas-8f94f-default-rtdb.firebaseio.com/datos/'+ index + '.json'
     this.httpClient.delete(url)
     .subscribe(
        response => console.log("resultado de eliminar persona: " + response)
        , error => console.log("Error al eliminar persona: " + error)  
        
     );

   }

}