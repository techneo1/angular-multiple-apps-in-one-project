import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./../../projects/dashboard/src/app/app.module').then(m => m.DashboardModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./../../projects/chat/src/app/app.module').then(m => m.ChatModule),
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
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
