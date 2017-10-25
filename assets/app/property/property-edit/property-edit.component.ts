import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PropertyService} from '../property.service';
import {ErrorService} from '../../errors/error.service';

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
                private router: Router) {}

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

        if (this.editMode) {
            const property = this.propertyService.getProperty(this.id);
            name = property.name;
        }

        this.propertyForm = new FormGroup({
            'name': new FormControl(name, Validators.required)
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