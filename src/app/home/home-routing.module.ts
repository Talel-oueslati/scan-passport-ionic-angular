import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationCdPage } from '../pages/reservation-cd/reservation-cd.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component:ReservationCdPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
