import { Routes } from '@angular/router';
import {CeratificatesListComponent} from "./certificates/ceratificates-list/ceratificates-list.component";

export const routes: Routes = [
  {path: 'certificates-list', component: CeratificatesListComponent},
  {path: "login", component: LoginPageComponent}
];
