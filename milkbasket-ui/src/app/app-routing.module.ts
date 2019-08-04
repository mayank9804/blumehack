import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SusbscriptionsComponent } from './susbscriptions/susbscriptions.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { InsightsComponent } from './insights/insights.component';
import { HomeRouteGuard } from './core/guards/home.guard.service';

const routes: Routes = [
    {
      path:'',
      redirectTo:'subscriptions',
      pathMatch: 'full',
    },
    {
      path:'subscriptions',
      canActivate: [HomeRouteGuard],
      component:SusbscriptionsComponent,
      
    },
    {
      path:'recommendations',
      canActivate: [HomeRouteGuard],
      component:RecommendationsComponent
    },
    {
      path:'insights',
      canActivate: [HomeRouteGuard],
      component:InsightsComponent
      
      
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
