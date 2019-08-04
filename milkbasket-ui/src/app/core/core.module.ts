import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { LoginRouteGuard } from './guards/login.guard.service';
import { HomeRouteGuard } from './guards/home.guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [AuthService,DataService,LoginRouteGuard,HomeRouteGuard]
})
export class CoreModule { }
