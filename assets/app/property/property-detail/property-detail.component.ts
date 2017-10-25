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
                console.log(this.property);
            }
        );
    }
    //
    // onAddToShoppingList() {
    //     this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // }
    //
    onEditProperty() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteProperty() {
        console.log('abc');
        this.propertyService.deleteProperty(this.property).subscribe(
            (properties: Property[]) => {
                console.log(properties);
            }
        );

        console.log('abc1');
        // this.router.navigate(['/properties']);
    }

}
