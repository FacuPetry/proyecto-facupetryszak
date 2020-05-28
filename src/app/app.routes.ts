import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const app_routes: Routes = [
 { path: 'home', component: HomeComponent}

];

export const app_routing = RouterModule.forRoot(app_routes);