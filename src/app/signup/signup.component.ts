import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    cinId : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    password : new FormControl('',Validators.required),
    
    
  })


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }




  signinNow(){
    this.errMsg="";
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email;
    const category = this.signinForm.value.category;
    const cinId = this.signinForm.value.cinId;
    
    

    
  }

}
