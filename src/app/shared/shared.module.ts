import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementValidatorComponent} from './components/element-validator/element-validator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageModule} from 'primeng/message';

@NgModule({
    declarations: [ElementValidatorComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MessageModule],
    exports: [ElementValidatorComponent]
})
export class SharedModule {
}
