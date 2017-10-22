import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {USER_ROUTES} from './user/user.routes';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: UserComponent,
        children: USER_ROUTES
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);