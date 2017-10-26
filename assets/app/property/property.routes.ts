import {Routes} from '@angular/router';
import {PropertyStartComponent} from './property-start/property-start.component';
import {PropertyDetailComponent} from './property-detail/property-detail.component';
import {PropertyEditComponent} from './property-edit/property-edit.component';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';

export const PROPERTY_ROUTES: Routes = [
    {
        path: '',
        component: PropertyStartComponent
    },
    {
        path: 'new',
        component: PropertyEditComponent
        // canDeactivate: [CanDeactivateGuard]
    },
    {
        path: ':id',
        component: PropertyDetailComponent
    },
    {
        path: ':id/edit',
        component: PropertyEditComponent
        // canDeactivate: [CanDeactivateGuard]
    }
];