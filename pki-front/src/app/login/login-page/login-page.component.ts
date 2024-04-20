import { Component } from '@angular/core';
import {LoginDTO} from "../../DTOs/loginDTO";
import {FormsModule} from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginDTO: LoginDTO = new LoginDTO();

  constructor(
    private http: HttpClient
  ) {
  }

  logIn(){
    //TODO: Metoda koja ce pozvati login iz servisa
  }

  logOut(){
    //TODO
  }
}
