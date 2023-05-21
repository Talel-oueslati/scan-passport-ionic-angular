import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationCdPage } from './reservation-cd.page';
import { SqliteService } from 'src/app/services/sqlite.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

const routes: Routes = [
  {
    path: '',
    component: ReservationCdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SQLite, SqliteService]
})
export class ReservationCdPageRoutingModule {}
