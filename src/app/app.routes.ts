


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './trabaja-nosotros/nosotros.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ComercioComponent } from './comercio/comercio.component';

const app_routes: Routes = [
 { path: 'home', component: HomeComponent},
 { path: 'nosotros', component: NosotrosComponent},
 { path: 'ubicacion', component: UbicacionComponent},
 { path: 'comercio', component: ComercioComponent},
 { path: '**', component: HomeComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);