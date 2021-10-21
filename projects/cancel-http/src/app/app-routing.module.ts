import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
