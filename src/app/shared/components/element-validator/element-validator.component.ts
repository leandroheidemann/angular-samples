import {Component, ContentChild, DoCheck} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
    selector: '[elementValidator]',
    template: `
        <ng-content></ng-content>

        <p-message *ngIf="(form?.submitted || model?.dirty) && model?.invalid" styleClass="mt-1 inline-block cursor-pointer"
                   severity="error" text="Field is required">
        </p-message>
    `,
    styleUrls: ['./element-validator.component.scss']
})
export class ElementValidatorComponent implements DoCheck {

    @ContentChild(NgModel) model!: NgModel;

    constructor(public form: NgForm) {
    }

    ngDoCheck() {
        console.log(this.form);
    }
}
