import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './helpers/auth.guard';

const routers: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile',
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
