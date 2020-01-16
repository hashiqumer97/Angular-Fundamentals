import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Component({
    templateUrl: './login.component.html'

})
export class LoginComponent{
    username
    password
   constructor(private authService:AuthService, private router:Router){
    

   }
   login(formValues){
       this.authService.loginUser(formValues.userName,
        formValues.password)

        if(formValues.userName && formValues.password != null){
        
            this.router.navigate(['events'])
            
        }
        else{
            alert("please re-enter your username or password!");
            this.router.navigate(['user/login'])
        }
   }
   cancel(){
    this.router.navigate(['events'])
   }
}