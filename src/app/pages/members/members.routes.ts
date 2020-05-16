import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";


const membersRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [LoginGuardGuard],
  }
];

export const MEMBERS_ROUTES = RouterModule.forChild(membersRoutes);
