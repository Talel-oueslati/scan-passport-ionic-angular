import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from "ngx-image-cropper";
import { IonicModule } from '@ionic/angular';

import { OcrImagePageRoutingModule } from './ocr-image-routing.module';

import { OcrImagePage } from './ocr-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcrImagePageRoutingModule,
    ImageCropperModule
  ],
  declarations: [OcrImagePage]
})
export class OcrImagePageModule {}
