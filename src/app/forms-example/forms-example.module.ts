import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsExampleComponent} from "./forms-example.component";
import {RouterModule, Routes} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: FormsExampleComponent
    }
];

@NgModule({
    declarations: [FormsExampleComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, InputNumberModule, SharedModule]
})
export class FormsExampleModule {
}
