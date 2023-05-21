import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletecPageRoutingModule } from './deletec-routing.module';

import { DeletecPage } from './deletec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletecPageRoutingModule
  ],
  declarations: [DeletecPage]
})
export class DeletecPageModule {}
