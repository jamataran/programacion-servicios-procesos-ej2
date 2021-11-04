import { Oferta } from './../../models/oferta';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-listado-ofertas',
  templateUrl: './listado-ofertas.component.html',
  styleUrls: ['./listado-ofertas.component.css']
})
export class ListadoOfertasComponent implements OnInit {

  public arrayOfertas: Array<Oferta>;
  public administrador: boolean;

  constructor(private homeService: HomeService, private router: Router, private loginService: LoginService) {
    this.arrayOfertas = new Array<Oferta>();
    this.homeService.getDatos().subscribe(
      response => {
        this.arrayOfertas = response;
      },
      error => {
        console.log(error.status);
      }
    );
  }

  ngOnInit(): void {
    this.homeService.getOfertas();
    if (this.loginService.getToken() === ''){
      this.administrador = false;
    } else {
      this.administrador = true;
    }
  }
  public goToViewDetail(id): void{
    this.router.navigate(['/home/detalleoferta', id]);
  }
  public goToLogin(): void{
    this.router.navigate(['/home/login']);
  }

  public deleteItem(id): void{
    this.homeService.deleteOferta(id);
  }

  public goToNuevaOferta(): void{
    this.router.navigate(['/home/nuevaoferta']);
  }

}
