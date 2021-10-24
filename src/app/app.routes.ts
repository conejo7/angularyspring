import { Routes, RouterModule } from '@angular/router';


import { ClientesComponent } from './components/clientes/clientes.component';
import { BodyComponent } from './components/body/body.component';
import { DirectivaComponent } from './components/directiva/directiva.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: ClientesComponent },
    { path: 'body', component: BodyComponent },
    { path: 'about', component: DirectivaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
