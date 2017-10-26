import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PropertyService} from '../property.service';
import {Property} from '../property.model';
import {CanComponentDeactivate} from '../../can-deactivate-guard.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-property-edit',
    templateUrl: './property-edit.component.html'
})
export class PropertyEditComponent implements OnInit, CanComponentDeactivate {
    id: string;
    editMode = false;
    property: Property;
    propertyForm: FormGroup;
    changesSaved = false;

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
            this.property = this.propertyService.getProperty(this.id);
            name = this.property.name;
            facilities = this.property.facilities;
            imagePath = this.property.imagePath;
            expectedPrice = this.property.expectedPrice;
            area = this.property.area;
            address1 = this.property.address1;
            address2 = this.property.address2;
            city = this.property.city;
            state = this.property.state;
            zip = this.property.zip;
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

        this.changesSaved = true;

        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if ((this.propertyForm.value.name !== this.property.name
                || this.propertyForm.value.facilities !== this.property.facilities
                || this.propertyForm.value.imagePath !== this.property.imagePath
                || this.propertyForm.value.expectedPrice !== this.property.expectedPrice
                || this.propertyForm.value.area !== this.property.area
                || this.propertyForm.value.address1 !== this.property.address1
                || this.propertyForm.value.address2 !== this.property.address2
                || this.propertyForm.value.city !== this.property.city
                || this.propertyForm.value.state !== this.property.state
                || this.propertyForm.value.zip !== this.property.zip)
            && !this.changesSaved) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}