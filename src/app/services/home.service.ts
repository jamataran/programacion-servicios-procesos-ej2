import { Oferta } from './../models/oferta';
import { Injectable } from '@angular/core';
import { AppEndPoints } from './../endpoint.component';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class HomeService{
    public arrayOfertas: Array<Oferta>;
    private listadoOfertas$ = new Subject<Array<any>>();
    private oferta$ = new Subject<Oferta>();
    public oferta: Oferta;
    public url: string = AppEndPoints.ENDPOINTOFERTAS;

    constructor(private http: HttpClient, private router: Router, private loginService: LoginService){
        this.arrayOfertas = new Array<Oferta>();
        this.oferta = new Oferta();
    }

    getDatos(): Observable<any>{
        return this.listadoOfertas$.asObservable();
    }
    getDatoOferta(): Observable<any>{
      return this.oferta$.asObservable();
  }

  public getList(): Array<Oferta>{
    return this.arrayOfertas;

  }

    public getOfertas() {
        this.http.get(this.url).subscribe(
            (response: Array<Oferta>) => {
              this.arrayOfertas = response;
              this.listadoOfertas$.next(this.arrayOfertas);
            },
            error => {
              console.log(error.status);
            }
          );
    }
    public getOferta(id: number): Oferta{
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.arrayOfertas.length; index++) {
        if (this.arrayOfertas[index].id === id) {
          this.oferta = this.arrayOfertas[index];
        }
      }
      return this.oferta;
    }
    public getUnaOferta(id: number): Oferta {
       this.http.get(this.url + '/' + id).subscribe(
           (response: Oferta) => {
             this.oferta = response;
             this.oferta$.next(this.oferta);
           },
           error => {
             alert(error.status + ' Esa oferta no existe');
             this.router.navigate(['/home']);
           }
         );
       return this.oferta;
   }
   public deleteOferta(id: number): void {
    const httpOptions  = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.loginService.getToken()
      })
    };
    this.http.delete(this.url + '/' + id, httpOptions).subscribe(
        (response: Oferta) => {
          const ofertaEliminada = response;
          for (let index = 0; index < this.arrayOfertas.length; index++) {
            if (this.arrayOfertas[index].id === id) {
              this.arrayOfertas.splice(index, 1);
              this.listadoOfertas$.next(this.arrayOfertas);
              break;
            }
          }
          this.listadoOfertas$.next(this.arrayOfertas);
          alert(ofertaEliminada.titulo + ' ELIMINADA');
          this.router.navigate(['/home']);
        },
        error => {
          alert(error.status + ' Esa oferta no existe');
          this.router.navigate(['/home']);
        }
      );
}
public postOferta(newOferta: Oferta): void {
  console.log(newOferta);
  const httpOptions  = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getToken(),
      'Content-Type': 'application/json'
    })
  };
  this.http.post(this.url, JSON.stringify(newOferta), httpOptions).subscribe(
      (response: Oferta) => {
        const ofertaEnviada = response;
        console.log(ofertaEnviada);
        this.listadoOfertas$.next(this.arrayOfertas);
        this.router.navigate(['/home']);
      },
      error => {
        //alert(JSON.stringify(error));
        console.log(JSON.stringify(error));
        console.log(error);
        this.router.navigate(['/home']);
      }
    );
}


}
