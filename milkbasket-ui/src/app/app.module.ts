import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SusbscriptionsComponent } from './susbscriptions/susbscriptions.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { InsightsComponent } from './insights/insights.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SusbscriptionsComponent,
    RecommendationsComponent,
    InsightsComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
