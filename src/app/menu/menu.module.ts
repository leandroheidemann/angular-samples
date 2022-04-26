import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {RouterModule} from "@angular/router";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";
import {AvatarModule} from "primeng/avatar";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, RippleModule, StyleClassModule, BadgeModule, InputTextModule, AvatarModule],
  exports: [MenuComponent]
})
export class MenuModule {
}
