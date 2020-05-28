import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const app_routes: Routes = [
 { path: 'home', component: HomeComponent},
 { path: 'nosotros', component: NosotrosComponent},
 { path: '**', component: HomeComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);