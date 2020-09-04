import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {faCloudMeatball } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public faCloudMeatball = faCloudMeatball;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required,Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  async changepass() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/changepass";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    this.router.navigate(['login']);
    this.fbFormGroup.reset();
  }
}
