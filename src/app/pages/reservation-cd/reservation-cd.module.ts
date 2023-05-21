import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SqliteService } from '../../services/sqlite.service';

import { ReservationCdPageRoutingModule } from './reservation-cd-routing.module';

import { ReservationCdPage } from './reservation-cd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationCdPageRoutingModule
  ],
  declarations: [ReservationCdPage],
  providers: [SQLite, SqliteService]
})
export class ReservationCdPageModule {}
