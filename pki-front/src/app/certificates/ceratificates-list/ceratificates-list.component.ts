import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ceratificates-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ceratificates-list.component.html',
  styleUrl: './ceratificates-list.component.css'
})
export class CeratificatesListComponent {
  certificates: any[] = [];
  constructor() {
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
}
