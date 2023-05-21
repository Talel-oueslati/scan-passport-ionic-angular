import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ImageCropperModule } from "ngx-image-cropper";
import { IonicModule } from '@ionic/angular';

import { ScanPassPageRoutingModule } from './scan-pass-routing.module';

import { ScanPassPage } from './scan-pass.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPassPageRoutingModule,ImageCropperModule,

  ],
  declarations: [ScanPassPage]
})
export class ScanPassPageModule {}
