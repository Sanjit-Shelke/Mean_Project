import { Component, OnInit } from '@angular/core';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faCookieBite = faCookieBite;
  public invalidCred = false;

  public fbFormGroup = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }
    
  
  ngOnInit(): void { }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/auth-user";
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);

    if (result.opr) { sessionStorage.setItem('sid', 'true'); this.router.navigate(['homepage']); }
    else { this.invalidCred = true; this.fbFormGroup.reset(); }

  }

  
  // loginHere() {

  //   const data = this.fbFormGroup.value;
  //   //console.log(data);

    

  

}
