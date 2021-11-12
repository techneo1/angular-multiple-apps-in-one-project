import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ChatAppComponent } from './app.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    ChatAppComponent,
    View1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ChatAppComponent]
})
export class AppModule { }

@NgModule({})
export class ChatSharedModule{

  static forRoot(): ModuleWithProviders<Object> {

    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
