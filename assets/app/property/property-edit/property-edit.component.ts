import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PropertyService} from '../property.service';

@Component({
    selector: 'app-property-edit',
    templateUrl: './property-edit.component.html'
})
export class PropertyEditComponent implements OnInit {
    id: string;
    editMode = false;
    propertyForm: FormGroup;

    constructor(private propertyService: PropertyService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    private initForm() {
        let name = '';
        let facilities = '';
        let imagePath = '';
        let expectedPrice = 0;
        let area = 0;
        let address1 = '';
        let address2 = '';
        let city = '';
        let state = '';
        let zip = 0;

        if (this.editMode) {
            const property = this.propertyService.getProperty(this.id);
            name = property.name;
            facilities = property.facilities;
            imagePath = property.imagePath;
            expectedPrice = property.expectedPrice;
            area = property.area;
            address1 = property.address1;
            address2 = property.address2;
            city = property.city;
            state = property.state;
            zip = property.zip;
        }

        this.propertyForm = new FormGroup({
            'name': new FormControl(name, Validators.required),
            'facilities': new FormControl(facilities),
            'imagePath': new FormControl(imagePath),
            'expectedPrice': new FormControl(expectedPrice),
            'area': new FormControl(area),
            'address1': new FormControl(address1),
            'address2': new FormControl(address2),
            'city': new FormControl(city),
            'state': new FormControl(state),
            'zip': new FormControl(zip)
        });
    }

    onSubmit() {
        if (this.editMode) {
            this.propertyService.updateProperty(this.id, this.propertyForm.value).subscribe();
        } else {
            this.propertyService.addProperty(this.propertyForm.value).subscribe();
        }

        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
}