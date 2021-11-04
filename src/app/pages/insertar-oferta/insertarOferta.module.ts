import { FormsModule } from '@angular/forms';
import { InsertarOfertaComponent } from './insertar-oferta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [InsertarOfertaComponent],
    imports: [ CommonModule, FormsModule ],
    exports: [InsertarOfertaComponent],
    providers: [],
})
export class InsertarOfertaModule {}