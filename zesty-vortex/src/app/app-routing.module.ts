import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";


const routes: Routes = [{ path: "homepage", component: HomepageComponent},
                        { path: "signup", component: SignupComponent },
                        { path: "login", component: LoginComponent },
                        { path: "", redirectTo: "/homepage",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

