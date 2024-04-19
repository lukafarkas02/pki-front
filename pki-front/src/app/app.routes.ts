import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {CertificateRequestComponent} from "./requests/certificate-request/certificate-request.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: "login", component: LoginPageComponent},
  {path: "requests", component: CertificateRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
