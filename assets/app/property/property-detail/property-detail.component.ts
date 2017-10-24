import {Component, OnInit} from '@angular/core';
import {Property} from '../property.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PropertyService} from '../property.service';

@Component({
    selector: 'app-property-detail',
    templateUrl: './property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit {

    property: Property;
    id: string;

    constructor(private propertyService: PropertyService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.property = this.propertyService.getProperty(this.id);
            }
        );
    }

    onEditProperty() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteProperty() {
        this.propertyService.deleteProperty(this.property).subscribe();
        this.router.navigate(['/properties']);
    }

}
