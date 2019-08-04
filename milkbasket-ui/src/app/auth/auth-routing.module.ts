import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginRouteGuard } from '../core/guards/login.guard.service';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent,
    canActivate:[LoginRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { 

}
