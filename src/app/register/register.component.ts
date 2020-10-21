import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm:FormGroup;
  
  registered:boolean=false;
  constructor(private router:Router,private currentroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      'username': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'mobile': new FormControl(null,[Validators.required,this.NumberValidator]),
      'address': new FormControl(null,[Validators.required])
    });
  }

  OnSubmit(){
    console.log(this.RegisterForm);
    this.registered=true;
    this.router.navigate(['registered'],{relativeTo:this.currentroute});
  }

  NumberValidator(val : FormControl) :{[s:string]:boolean} {
    //console.log(val);

    if(val.value){
      if(val.value.match(/.*[^0-9].*/)){
        return {notnumbers : true};
    }
    }
    return null;
}
}
