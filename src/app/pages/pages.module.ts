import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { DetalleOfertaModule } from './detalle-oferta/detalleOferta.module';
import { ListadoOfertasModule } from './listado-ofertas/listadoOfertas.module';
import { LoginModule } from './login/login.module';
import { InsertarOfertaModule } from './insertar-oferta/insertarOferta.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HomeModule,
        ListadoOfertasModule,
        DetalleOfertaModule,
        LoginModule,
        InsertarOfertaModule
    ],
    exports: [
        HomeModule,
        ListadoOfertasModule,
        DetalleOfertaModule,
        LoginModule,
        InsertarOfertaModule
    ],
    providers: [],
})
export class PagesModule {}
