import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personasService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  //standalone: true,
  //imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  nombreInput: string ;
  apellidoInput: string ;
  index: number;

  constructor( 
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert(' el indice es: ' + (indice + 1))
    );
  }
  ngOnInit() {
    
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  onGuardarPersona() {

    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.index ) { 
      this.personasService.modificarPersona(this.index, persona1); 
 
    
    }      
     else   {
      this.personasService.AgregarPersona(persona1); 
     }
  
    this.router.navigate(['personas']);
  }


  eliminarPersona(){
    if(this.index  != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas'])

  }
}
