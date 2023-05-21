import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpagesPage } from './firstpages.page';

const routes: Routes = [
  {
    path: '',
    component: FirstpagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstpagesPageRoutingModule {}
