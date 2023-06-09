import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FileListComponent } from './pages/file-list/file-list.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: "", component: FileListComponent },
            { path: "upload", component: UploadComponent },
            { path: "settings", component: AccountSettingsComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
