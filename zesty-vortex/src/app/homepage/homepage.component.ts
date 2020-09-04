import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, OutletContext } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const sid = sessionStorage.getItem('sid');
    if (!sid) {


      this.router.navigate(['frontpage']);
    }
  }

   logout(){
     sessionStorage.removeItem('sid');
    this.router.navigate(['frontpage']);
  
}
}
