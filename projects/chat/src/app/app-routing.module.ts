import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from 'projects/chat/src/app/view1/view1.component';

const routes: Routes = [
  { path: 'chat', component: View1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
