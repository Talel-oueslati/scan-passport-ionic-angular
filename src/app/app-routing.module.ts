import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SeemoreComponent } from './seemore/seemore.component';
import { RegisterrPage } from './registerr/registerr.page';
import { RegisterrPageModule } from './registerr/registerr.module';
import { UserfirstpageComponent } from './userfirstpage/userfirstpage.component';

const routes: Routes = [
  {
    path: 'public/home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'public/firstpage',
    pathMatch: 'full'
  },
  {
    path: 'public/reservation-cd',
    loadChildren: () => import('./pages/reservation-cd/reservation-cd.module').then( m => m.ReservationCdPageModule)
  },
  {path:'login', component: LoginComponent},
  {path:'admin', component: BoardAdminComponent},
  {path:'profile', component: ProfileComponent},
  {path:'clients', component: RegisterComponent},
  {path:'seemore', component: SeemoreComponent},
  {path:'registerr', component: RegisterrPage},
  {path:'userfirstpage', component: UserfirstpageComponent},


  {
    path: 'public/firstpage',
    loadChildren: () => import('./pages/firstpages/firstpages.module').then( m => m.FirstpagesPageModule)
  },
  {
    path: 'scan-pass',
    loadChildren: () => import('./pages/scan-pass/scan-pass.module').then( m => m.ScanPassPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'ocr-image',
    loadChildren: () => import('./ocr-image/ocr-image.module').then( m => m.OcrImagePageModule)
  },
  {
    path: 'getclients/:id',
    loadChildren: () => import('./pages/getclients/getclients.module').then( m => m.GetclientsPageModule)
  },
  {
    path: 'deletec',
    loadChildren: () => import('./deletec/deletec.module').then( m => m.DeletecPageModule)
  },
  {
    path: 'registerr',
    loadChildren: () => import('./registerr/registerr.module').then( m => m.RegisterrPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
