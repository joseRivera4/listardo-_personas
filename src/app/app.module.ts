import { BrowserModule } from "@angular/platform-browser";
import { Injectable, NgModule } from "@angular/core";


import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { PersonaComponent } from "./personas/persona/persona.component";
import { FormularioComponent } from "./personas/formulario/formulario.component";
import { Loggingservices } from "./loggingServices";
import { PersonasService } from "./personasService";
import { PersonasComponent } from "./personas/personas.component";

import { RouterModule} from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { DataServices } from "./data.service";
import { HttpClientModule } from "@angular/common/http";







@NgModule({
    declarations: [
        AppComponent,
        PersonaComponent,
        FormularioComponent,
        PersonasComponent,
    

    
    
    ],
    imports: [
        BrowserModule,    
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule

    
    
   
    ],
    providers :[Loggingservices, PersonasService, DataServices],
    bootstrap: [AppComponent]
})

export class AppModule{}