import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login', 
  exportAs: "ngForm",
   //standalone: true,
  //imports: [NgForm],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(){}

  ngOnInit() {
   
  }

  login( form: NgForm){

    const email = form.value.email;
    const password = form.value.password;
  }



}
