import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserService } from './store/user/user.service';
import { UserEffects } from './store/user/user.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { reducers } from './store/reducers';
import { FilesEffects } from './store/files/files.effects';
import { FilesService } from './store/files/files.service';
import { HeaderComponent } from './ui/header/header.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FileListComponent } from './pages/file-list/file-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        HeaderComponent,
        AccountSettingsComponent,
        FileListComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forFeature("app", reducers),
        EffectsModule.forFeature([
            UserEffects,
            FilesEffects,
        ]),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        UserService,
        FilesService
    ]
})
export class HomeModule { }
