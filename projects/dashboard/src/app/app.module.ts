import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DashboardAppComponent } from './app.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    DashboardAppComponent,
    View1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardAppComponent]
})
export class AppModule { }

@NgModule({})
export class DashboardSharedModule{

  static forRoot(): ModuleWithProviders<Object> {

    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
