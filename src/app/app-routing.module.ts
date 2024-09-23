import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent, },
  {path:'login',component:LoginComponent},

  { path: 'profile', component: ProfileComponent,  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard], // Protect the user page with the guard
  },
 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
