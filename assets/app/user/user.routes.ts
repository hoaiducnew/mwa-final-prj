import {Routes} from '@angular/router';
import {SignupComponent} from './signup.component';
import {SigninComponent} from './signin.component';
import {LogoutComponent} from './logout.component';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';


export const USER_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'signup', pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent,
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }

];