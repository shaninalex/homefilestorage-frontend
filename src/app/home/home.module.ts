import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forFeature("", {}),
        EffectsModule.forFeature([]),
    ]
})
export class HomeModule { }
