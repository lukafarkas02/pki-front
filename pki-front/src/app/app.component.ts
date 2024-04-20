import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CeratificatesListComponent} from "./certificates/ceratificates-list/ceratificates-list.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CeratificatesListComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pki-front';
  constructor(private router: Router) {
  }

  toCertificateList(){
    this.router.navigate(['/certificates-list']);
  }
}
