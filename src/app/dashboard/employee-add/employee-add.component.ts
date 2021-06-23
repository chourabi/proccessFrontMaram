import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    cinId : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    password : new FormControl('',Validators.required),
    role: new FormControl('user',Validators.required),
    
    
  })


  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }
  }




  signinNow(){
    this.errMsg="";
    const username = this.signinForm.value.username;
    const password = this.signinForm.value.password;
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email;
    const category = this.signinForm.value.category;
    const cinId = this.signinForm.value.cinId;
    const role = this.signinForm.value.role;
    
    
    

    this.auth.signUp(username,email,password,name,category,cinId,role).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Account created successfully.";
        this.signinForm.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      err.error.errors.forEach(e => {

        this.errMsg+=e.field+', '+e.defaultMessage+'\n';
      });
      
    })

    
  }

}
