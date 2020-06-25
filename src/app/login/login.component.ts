import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  user=

[
    {
        'username':'zeeshan@gmail.com',
        'password':'12345'
    },
    {
        'username':'chaudhary@gmail.com',
        'password':'1234'
    },
    {
        'username':'shan@gmail.com',
        'password':'1234'
    }
]


  constructor(private router:Router, private fb:FormBuilder) {

   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    // for(let i of this.user){
    //   console.log(i.username)
  
    // }
    }
login(){
  console.log('home')
  console.log(this.loginForm.value.email)
   for(let i of this.user){
      if(i.username == this.loginForm.value.email && i.password == this.loginForm.value.password)
      {
        localStorage.setItem('login','true')
        return this.router.navigate(['/home'])
      }
    }
    return alert('invalid username or passwword')
  
  
}
forgotPassword() {
  return this.router.navigate(['/forgotpassword'])
}

}
