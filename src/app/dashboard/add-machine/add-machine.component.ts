import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {



  errMsg='';
  successMsg='';
  machineForm = new FormGroup({
    name : new FormControl('',Validators.required)
    
    
  })


  constructor(private auth:AuthService,private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }
  }




  addMachine(){
    this.errMsg="";
    const name = this.machineForm.value.name;
    
    

    this.api.addNewMachine(name).subscribe((data:any)=>{
      console.log(data);
      if (data.id) {
        this.successMsg="Machine ajouter avec success.";
        this.machineForm.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      this.errMsg+='Erreur, Veuillez réessayer';
      
    })

    
  }

}
