import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule,
        StoreModule.forFeature("identity", authReducer),
        EffectsModule.forFeature([AuthEffects]),
    ],
    providers: [
    ]
})
export class AuthModule { }
