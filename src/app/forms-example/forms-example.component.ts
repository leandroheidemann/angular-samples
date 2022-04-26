import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-forms-example-example',
    templateUrl: './forms-example.component.html',
    styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent implements OnInit {

    user: any = {};

    @ViewChild('formulario') private form!: NgForm;

    constructor() {
    }

    ngOnInit(): void {
    }

    submit(event: any) {
        console.log(event)
    }

    reset() {
        this.form.reset();
    }
}
