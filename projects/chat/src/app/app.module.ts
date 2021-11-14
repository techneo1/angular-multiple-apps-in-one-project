import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ChatAppComponent } from './app.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    ChatAppComponent,
    View1Component,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ChatAppComponent]
})
export class ChatModule { }

@NgModule({})
export class ChatSharedModule{

  static forRoot(): ModuleWithProviders<Object> {

    return {
      ngModule: ChatModule,
      providers: []
    }
  }
}
