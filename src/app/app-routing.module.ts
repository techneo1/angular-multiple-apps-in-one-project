import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSharedModule } from 'projects/dashboard/src/app/app.module';
import { ChatSharedModule } from 'projects/chat/src/app/app.module';
import { DashboardAppComponent } from 'projects/dashboard/src/app/app.component';
import { ChatAppComponent } from 'projects/chat/src/app/app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardAppComponent
  },
  {
    path: 'chat',
    component: ChatAppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
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
