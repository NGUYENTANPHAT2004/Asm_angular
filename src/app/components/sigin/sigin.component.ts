import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { IUser } from '../type/user';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrl: './sigin.component.css'
})
export class SiginComponent {
  constructor(private userService: UserService){}
  registerform = new FormGroup({
    name:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  router = new Router();
  onSubmit = ()=>{
      this.userService.RegisterUser(this.registerform.value as IUser).subscribe(
        data=>{
            alert('Đăng ký thành công')
            this.router.navigate(['login'])
        },
        error=>{
          // console.log(error);
          alert(error.error)
        }
      )
  }
}
