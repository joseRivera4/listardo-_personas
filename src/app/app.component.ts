import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { Loggingservices } from './loggingServices';
import { PersonasService } from './personasService';

@Component({
  selector: 'app-root',
 // standalone: true,
 //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {





  titulo = 'listado-personas';

 
 /*personaAgregada(persona: Persona){
 // this.logginService.enviaMensajeConsola(" agregamos  al  arreglo la persona : "+persona.nombre)
  //this.personas.push(persona);
  this.personasService.AgregarPersona(persona);}*/

 

}
