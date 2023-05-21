import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcrImagePage } from './ocr-image.page';

const routes: Routes = [
  {
    path: '',
    component: OcrImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcrImagePageRoutingModule {}
