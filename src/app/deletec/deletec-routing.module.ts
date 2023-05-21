import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletecPage } from './deletec.page';

const routes: Routes = [
  {
    path: '',
    component: DeletecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletecPageRoutingModule {}
