import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule
    ],
    providers: []
})
export class AuthModule { }
