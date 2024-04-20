import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreateCertificateComponent} from "./create-certificate/create-certificate.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateCertificateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pki-front';
}
