import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetclientsPageRoutingModule } from './getclients-routing.module';

import { GetclientsPage } from './getclients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetclientsPageRoutingModule
  ],
  declarations: [GetclientsPage]
})
export class GetclientsPageModule {}
