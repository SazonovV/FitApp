import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full'},
  { path: 'start', loadChildren: './pages/start-page/start-page.module#StartPageModule'},
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule', canActivate: [AuthGuard]},
  { path: 'friends', loadChildren: './pages/friends/friends.module#FriendsModule', canActivate: [AuthGuard]},
  { path: 'exercises', loadChildren: './pages/exercises/exercises.module#ExercisesModule', canActivate: [AuthGuard]},
  { path: 'trains', loadChildren: './pages/trains/trains.module#TrainsModule', canActivate: [AuthGuard]},
  { path: 'today', loadChildren: './pages/today/today.module#TodayModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
