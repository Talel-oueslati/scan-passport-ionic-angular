import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPassPage } from './scan-pass.page';

const routes: Routes = [
  {
    path: '',
    component: ScanPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPassPageRoutingModule {}
