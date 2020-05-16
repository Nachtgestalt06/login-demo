import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MEMBERS_ROUTES} from "./members.routes";
import {MaterialModule} from "../../material.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MEMBERS_ROUTES
  ]
})
export class MembersModule {
}
