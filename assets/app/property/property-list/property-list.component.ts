import {Component, OnInit} from '@angular/core';
import {Property} from '../property.model';
import {Subscription} from 'rxjs/Subscription';
import {PropertyService} from '../property.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorService} from '../../errors/error.service';

@Component({
    selector: 'app-property-list',
    templateUrl: './property-list.component.html'
})
export class PropertyListComponent implements OnInit {

    properties: Property[];
    subscription: Subscription;

    constructor(private propertyService: PropertyService,
                private router: Router,
                private route: ActivatedRoute,
                private errorService: ErrorService) {
    }

    ngOnInit() {
        this.subscription = this.propertyService.propertiesChanged
            .subscribe(
                (properties: Property[]) => {
                    this.properties = properties;
                }
            );
        this.propertyService.getProperties().subscribe(
            (properties: Property[]) => {
                this.properties = properties;
            }
        );
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
