import { Routes } from '@angular/router';

import {CeratificatesListComponent} from "./certificates/ceratificates-list/ceratificates-list.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {CreateCertificateComponent} from "./create-certificate/create-certificate.component";

export const routes: Routes = [
  {path: 'certificates-list', component: CeratificatesListComponent},
  {path: "login", component: LoginPageComponent},
  {path: 'create-certificate', component: CreateCertificateComponent}
];
