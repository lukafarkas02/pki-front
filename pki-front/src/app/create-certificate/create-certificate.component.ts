import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-certificate',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './create-certificate.component.html',
  styleUrl: './create-certificate.component.css'
})
export class CreateCertificateComponent {
  commonName: string = "";
  sureName: string = "";
  givenName: string = "";
  organization: string = "";
  organizationUnit: string = "";
  country: string = "";
  email: string = "";
  password: string = "";
  certificateType: string = "";
  digitalSignature: boolean = false;
  nonRepudiation: boolean = false;
  codeSigning: boolean = false;
  emailProtection: boolean = false;
}
