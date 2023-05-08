import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
