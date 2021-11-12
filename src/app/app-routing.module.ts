import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSharedModule } from 'projects/dashboard/src/app/app.module';
import { ChatSharedModule } from 'projects/chat/src/app/app.module';
import { DashboardAppComponent } from 'projects/dashboard/src/app/app.component';
import { ChatAppComponent } from 'projects/chat/src/app/app.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardAppComponent
  },
  {
    path: 'chat',
    component: ChatAppComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
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
