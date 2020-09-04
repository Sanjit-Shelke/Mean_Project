import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    contact: ['',Validators.required],
  })


  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
  }

  async signup() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/addusers";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    this.router.navigate(['login']);
    this.fbFormGroup.reset();
  }


}
