import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employees-managemenet',
  templateUrl: './employees-managemenet.component.html',
  styleUrls: ['./employees-managemenet.component.css']
})
export class EmployeesManagemenetComponent implements OnInit {

  employees:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeList() 
  }

  getEmployeeList(){
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.api.getEmployeesList().subscribe((data)=>{
      console.log(data);
      
      this.employees = data;
    })

  }


  deleteEmployee(id){
      if (confirm("Do you really wonna delete this item ?")) {
        this.api.deleteEmployee(id).subscribe((data:any)=>{
          this.getEmployeeList();
        },(err)=>{
          alert('Something went wrong, please try again.')
        })
      }
    
  }

}
