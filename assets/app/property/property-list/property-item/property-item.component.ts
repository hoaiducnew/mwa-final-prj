import {Component, Input} from '@angular/core';
import {Property} from '../../property.model';

@Component({
    selector: 'app-property-item',
    templateUrl: './property-item.component.html'
})
export class PropertyItemComponent {
    @Input() property: Property;
    @Input() index: number;
}
