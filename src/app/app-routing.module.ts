import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleOfertaComponent } from './pages/detalle-oferta/detalle-oferta.component';
import { ListadoOfertasComponent } from './pages/listado-ofertas/listado-ofertas.component';
import { InsertarOfertaComponent } from './pages/insertar-oferta/insertar-oferta.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListadoOfertasComponent
      },
      {
        path: 'ofertas',
        component: ListadoOfertasComponent
      },
      {
        path: 'detalleoferta/:id',
        component: DetalleOfertaComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'nuevaoferta',
        component: InsertarOfertaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
