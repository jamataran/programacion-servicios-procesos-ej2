import { LoginService } from './../../services/login.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/models/loginForm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginModel: LoginForm;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginModel = new LoginForm();
   }

  ngOnInit(): void {
    this.loginService.getData().subscribe(
      response => {
        this.router.navigate(['/home/ofertas']);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(f: NgForm){
    console.log(JSON.stringify(this.loginModel));
    this.loginService.postLogin(this.loginModel);
  }

  public goToOfertas(): void{
    this.router.navigate(['/home']);
  }

}
