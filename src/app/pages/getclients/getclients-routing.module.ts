import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetclientsPage } from './getclients.page';

const routes: Routes = [
  {
    path: '',
    component: GetclientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetclientsPageRoutingModule {}
