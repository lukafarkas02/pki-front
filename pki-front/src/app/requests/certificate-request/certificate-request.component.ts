import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate-request',
  standalone: true,
  imports: [],
  templateUrl: './certificate-request.component.html',
  styleUrl: './certificate-request.component.css'
})
export class CertificateRequestComponent {
  data = {
    text1: '2024-04-01',
    text2: '2024-05-01',
    text3: 'Security',
    text4: 'Accepted'
  };
}
