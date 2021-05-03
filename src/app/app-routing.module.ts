import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  {
    component: AddComponent,
    path: 'add',
  },

  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    component: ListComponent,
    path: 'list',
  },
  {
    component: DeleteComponent,
    path: 'delete',
  },
  {
    component: ModifyComponent,
    path: 'modify/:id',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
