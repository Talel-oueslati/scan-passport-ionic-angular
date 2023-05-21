import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstpagesPageRoutingModule } from './firstpages-routing.module';

import { FirstpagesPage } from './firstpages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstpagesPageRoutingModule
  ],
  declarations: [FirstpagesPage]
})
export class FirstpagesPageModule {}
