import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  userEmail: string = "";
  user: IUser[] = []

  constructor(private UserService: UserService){}
  this.users = this.UserService.findAll();

  seve(): void {
    let user: IUser = {
      fullName: this.userEmail.split('@')[0],
      email: this.userEmail
    
    }
    this.UserService.save(user);
    this.userEmail = "";
    this.user = this.UserService.findAll();

  }

}
