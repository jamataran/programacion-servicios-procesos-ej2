import { LoginForm } from './../models/loginForm';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseLogin } from './../models/reponseLogin';
import { Subject, Observable } from 'rxjs';
import { AppEndPoints } from '../endpoint.component';

@Injectable()
export class LoginService{
  private token: string;
  private token$ = new Subject<string>();
  public url: string = AppEndPoints.ENDPOINTLOGIN;

  constructor(
    private httpClient: HttpClient
  ){
    this.token = '';
  }

  public getToken(): string{
    return this.token;
  }

  public getData(): Observable<string>{
    return this.token$.asObservable();
  }

  public postLogin(user: LoginForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.httpClient.post(this.url, JSON.stringify(user), httpOptions).subscribe(
      (response: ResponseLogin) => {
        this.token = response.id_token;
        this.token$.next(this.token);
      },
      error => {
        console.log(error);
        alert(error.status + ' Credenciales incorrectas ' + error.statusText);
      }
    );
  }
}
