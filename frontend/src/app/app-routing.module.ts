import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, */
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'dog-list',
    loadChildren: () => import('./dogList/dog-list/dog-list.module').then( m => m.DogListPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'cat-list',
    loadChildren: () => import('./cat-list/cat-list.module').then( m => m.CatListPageModule),
    canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
