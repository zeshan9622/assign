import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
info
info1= [1,3,4]
countryName
dogType
  constructor(private user:ApiService , private router:Router) { }

  ngOnInit() {

this.user.getUser().subscribe( data=>{
 this.info=data['message']
 console.log(this.info);
 this.countryName = Object.keys(this.info)
 console.log(this.countryName);
 this.dogType = Object.values(this.info)
 console.log(this.dogType);
 
}
 )
  

  }

  

  logout() {
    localStorage.removeItem('login')
    return this.router.navigate(['/login'])
  }

}
