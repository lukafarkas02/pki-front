import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {CertificateService} from "../../services/certificate-service";

@Component({
  selector: 'app-ceratificates-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ceratificates-list.component.html',
  styleUrl: './ceratificates-list.component.css'
})
export class CeratificatesListComponent implements OnInit{
  certificates: any[] = [];
  constructor(
    //private http: HttpClient,
    //private certificateService: CertificateService
  ) {
    this.certificates = [
      {
        id: 'ABC123',
        subject: 'Certificate Subject A',
        issuer: 'Issuer A',
        validFrom: '1.1.2023',
        validTo: '01.01.2025'
      },
      {
        id: 'DEF456',
        subject: 'Certificate Subject B',
        issuer: 'Issuer B',
        validFrom: '1.2.2023',
        validTo: '02.02.2025'
      }
    ];
  }

  ngOnInit() {
    /*
    TODO: Pozvati metodu iz servisa koja dobavlja sve sertifikate sa servera i popuniti certificates listu
     */
  }

  revoke(){
    /*
    TODO: Pozzvati metodu iz servisa koja revoke-uje sertifikat
     */
  }
}
