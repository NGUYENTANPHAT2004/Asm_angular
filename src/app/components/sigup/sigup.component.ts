import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../type/user';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'] // Sửa lỗi chính tả ở đây
})
export class SigupComponent {
  constructor(private userService:UserService){}
  router = new Router();
  ngOnInit() {
    if (this.userService.CheckUserValid()){
        this.router.navigate(['admin']);
    }
  }
  loginform = new FormGroup({
      email: new FormControl('',Validators.email),
      password: new FormControl('',Validators.minLength(8))
  })
  
  onSubmit = ()=>{
    this.userService.UserLogin(this.loginform.value as IUser).subscribe(
      data=>{
         console.log(data); 
         localStorage.setItem('user',data.accessToken)        
          alert('Đăng nhập thành công')
          this.router.navigate(['admin']);
      }
      ,error=>{
          // console.log(error);   
          alert(error.error)       
      }
    )
  }
  CheckUser =()=>{
     console.log(this.userService.CheckUserValid())
  }
  // constructor(private userService: UserService, private router: Router) {}

  // loginform = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(8)])
  // });

  // onSubmit = () => {
  //   if (this.loginform.valid) {
  //     this.userService.UserLogin(this.loginform.value as IUser).subscribe(
  //       data => {
  //         alert('Đăng nhập thành công');
  //         this.router.navigate(['']);
  //       },
  //       (error) => {
  //         alert(error.error);
  //       }
  //     );
  //   } else {
  //     alert('Vui lòng điền đầy đủ thông tin');
  //   }
  // }
}
