import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { Loggingservices } from '../loggingServices';
import { PersonasService } from '../personasService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',

  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {


  personas: Persona[] = [];

  constructor(private personasService: PersonasService,
              private router: Router,
              ){}
 ngOnInit(): void {
      this.personasService.obtenerPersonas()  
      .subscribe((personas: any ) =>{
        this.personas = personas;
      this.personasService.setPersonas(personas)
      });
        
       
     
      
 }
  
  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}

