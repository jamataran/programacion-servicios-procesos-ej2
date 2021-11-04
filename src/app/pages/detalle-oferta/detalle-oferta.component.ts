import { Oferta } from './../../models/oferta';
import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {
  public sub: any;
  public id: number;
  public oferta: Oferta;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService)
    {
      this.oferta = new Oferta();
      this.homeService.getDatoOferta().subscribe(
      response => {
        this.oferta = response;
      },
      error => {
        console.log(error.status);
      }
    );
     }

  ngOnInit(): void {

    this.sub = this.route.paramMap.subscribe((parms: ParamMap) => {
      this.id = Number(parms.get('id'));
      //this.oferta = this.homeService.getOferta(this.id);
      this.oferta = this.homeService.getUnaOferta(this.id);
    });
  }

  public goToOfertas(): void{
    this.router.navigate(['/home']);
  }
}
