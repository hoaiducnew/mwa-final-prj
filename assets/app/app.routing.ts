import {AuctionComponent} from './auction/auction.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {BidComponent} from './bid/bid.component';
import {USER_ROUTES} from './user/user.routes';

import {PropertiesComponent} from './property/properties.component';
import {PROPERTY_ROUTES} from './property/property.routes';

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
    },
    {
        path: "auction",
        component: AuctionComponent
    },
    {
        path: "properties",
        component: PropertiesComponent,
        children: PROPERTY_ROUTES
    },
    {
        path: 'bid',
        component: BidComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);