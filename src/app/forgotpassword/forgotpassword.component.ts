import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.forgotpasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newpassword:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]
    });
  }

  onSubmit() {
   console.log(this.forgotpasswordForm.value);
   if(this.forgotpasswordForm.value.newpassword != this.forgotpasswordForm.value.confirmpassword) {
     alert(`new and confirm password doesn't match`)
     return this.forgotpasswordForm.reset()
   } else {
    alert('link to set new password is sent to the provided mail id')
    return this.router.navigate(['/login'])
   }
  }

}
