import { Component } from '@angular/core';
import { environment } from "../../../../environments/environment";


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

    account_link: string = environment.AUTH_SERVER;
}
