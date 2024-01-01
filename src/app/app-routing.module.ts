import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'createUser', component : RegisterComponent},
  {path : 'allUsers', component : UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
