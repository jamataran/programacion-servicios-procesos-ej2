import { LoginService } from './../../services/login.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from 'src/app/services/home.service';

@NgModule({
    declarations: [HomeComponent],
    imports: [ CommonModule, RouterModule ],
    exports: [HomeComponent],
    providers: [HomeService, LoginService],
})
export class HomeModule {}
