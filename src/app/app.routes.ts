import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/public/login/login.component";
import {RegisterComponent} from "./pages/public/register/register.component";

export const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'members', loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule)}
];
