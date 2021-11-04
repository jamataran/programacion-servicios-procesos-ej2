import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [ CommonModule, FormsModule],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule {}
