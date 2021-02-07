import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './helpers/auth.guard';
import {UserComponent} from './pages/user/user.component';

const routers: Routes = [
  {path: '', component: UserComponent},
  {path: 'presentation', component: HomeComponent},
  {path: 'profile', canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        m => m.ProfileModule
      )
  },
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
