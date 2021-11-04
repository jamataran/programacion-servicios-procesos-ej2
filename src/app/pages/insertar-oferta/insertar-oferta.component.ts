import { NgForm } from '@angular/forms';
import { Oferta } from './../../models/oferta';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-oferta',
  templateUrl: './insertar-oferta.component.html',
  styleUrls: ['./insertar-oferta.component.css']
})
export class InsertarOfertaComponent implements OnInit {

  public ofertaModel: Oferta;

  public validateTitulo: boolean;
  public validateEmpresa: boolean;
  public validateDescripcion: boolean;
  public validateCiudad: boolean;
  public validateEmail: boolean;

  public longitudCiudad: number;

  constructor(private homeService: HomeService, private router: Router) {
    this.ofertaModel = new Oferta();
    this.validateTitulo = false;
    this.validateEmpresa = false;
    this.validateDescripcion = false;
    this.validateCiudad = false;
    this.validateEmail = false;
    this.longitudCiudad = 0;
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.validaciones(f);

    this.longitudCiudad = f.value.ciudad.length;

    if ((this.validateTitulo === false) &&
        (this.validateEmpresa === false) &&
        (this.validateDescripcion === false) &&
        (this.validateCiudad === false) &&
        (this.validateEmail === false)
      ){
      this.homeService.postOferta(this.ofertaModel);
    }
  }

  public goToOfertas(): void{
    this.router.navigate(['/home']);
  }

  public validaciones(f: NgForm): void{
    if ((f.value.titulo.length > 100) || (f.value.titulo.length < 5)) {
      this.validateTitulo = true;
    } else {
      this.validateTitulo = false;
    }
    if ((f.value.empresa.length > 50) || (f.value.empresa.length < 5)){
      this.validateEmpresa = true;
    } else {
      this.validateEmpresa = false;
    }
    if ((f.value.descripcion.length > 300) || (f.value.descripcion.length < 5)){
      this.validateDescripcion = true;
    } else {
      this.validateDescripcion = false;
    }
    if ((f.value.ciudad.length > 50) || (f.value.ciudad.length < 5)){
      this.validateCiudad = true;
    } else {
      this.validateCiudad = false;
    }
    if ((f.value.email.length > 50) || (f.value.email.length < 5)){
      this.validateEmail = true;
    } else {
      this.validateEmail = false;
    }
  }

}
