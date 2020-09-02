import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FrontpageComponent } from "./frontpage/frontpage.component";
import { from } from 'rxjs';


const routes: Routes = [{ path:"frontpage",component:FrontpageComponent},
                        { path: "homepage", component: HomepageComponent },
                        { path: "signup", component: SignupComponent },
                        { path: "login", component: LoginComponent },
                        { path: "", redirectTo: "/frontpage",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

