import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { FrontpageComponent } from "./frontpage/frontpage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { GalleryComponent } from './gallery/gallery.component';



const routes: Routes = [{ path:"frontpage",component:FrontpageComponent},
  {
    path: "homepage", component: HomepageComponent, children: [
      {path:'gallery',component: GalleryComponent}]
  },
                        { path: "signup", component: SignupComponent },
                        { path: "login", component: LoginComponent },
                        { path:"PageNotFoundComponent",component:PageNotFoundComponent},
                        { path: "", redirectTo: "/frontpage", pathMatch: "full" },
                        { path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

