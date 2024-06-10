import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: UserService) {
  }
  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }
  logout(): void {
    this.authService.logout();
  }
}
