import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from 'projects/chat/src/app/view1/view1.component';
import { View2Component } from 'projects/chat/src/app/view2/view2.component';

const routes: Routes = [
  { path: 'chat/one', component: View1Component },
  { path: 'chat/two', component: View2Component },
  { path: 'chat', redirectTo: 'chat/one' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
