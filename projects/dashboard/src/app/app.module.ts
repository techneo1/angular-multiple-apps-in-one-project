import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardAppComponent } from './app.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    DashboardAppComponent,
    View1Component,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardAppComponent]
})
export class DashboardModule { }

@NgModule({})
export class DashboardSharedModule{

  static forRoot(): ModuleWithProviders<Object> {

    return {
      ngModule: DashboardModule,
      providers: []
    }
  }
}
