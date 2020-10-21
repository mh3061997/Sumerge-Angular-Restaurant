import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  loggedin:boolean=false;
   
  OnSubmit(LoginForm:NgForm){
    ///console.log(LoginForm);
    this.loggedin=true;
    this.router.navigate(['loggedin'],{relativeTo:this.currentRoute});

  }
}
