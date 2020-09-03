import { Component, OnInit } from '@angular/core';
import {faCookieBite} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faCookieBite = faCookieBite;

  constructor() { }

  ngOnInit(): void {
  }

}
