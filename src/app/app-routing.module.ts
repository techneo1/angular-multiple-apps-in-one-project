import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSharedModule } from 'projects/dashboard/src/app/app.module';
import { ChatSharedModule } from 'projects/chat/src/app/app.module';

const routes: Routes = [
  {path: 'dashboard',
   loadChildren: '../../projects/dashboard/src/app/app.module#DashboardSharedModule'},
  {path: 'chat',
   loadChildren: '../../projects/chat/src/app/app.module#ChatSharedModule'},
  { path: '**', redirectTo: '/dashboard/one'}
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardSharedModule.forRoot(),
    ChatSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
