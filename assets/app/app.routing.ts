import {HomeComponent} from './auction/home/home.component';
import {AuctionComponent} from './auction/auction.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {BidComponent} from './bid/bid.component';
import {USER_ROUTES} from './user/user.routes';


import {PropertiesComponent} from './property/properties.component';
import {PROPERTY_ROUTES} from './property/property.routes';
import {AppGuard, AppGuardService} from './app-guard.service';

const APP_ROUTES: Routes = [


    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent,
        children: USER_ROUTES
    },
    {
        path: "auction",
        component: AuctionComponent
    },
    {
        path: "properties",
        component: PropertiesComponent,
        canActivate: [AppGuard],
        children: PROPERTY_ROUTES
    },
    {
        path: 'bid',
        component: BidComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);