import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  interventions = [];
  employees = [];
  machines = [];
  data = [];
  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getEmployeesList().subscribe((data:any)=>{
      this.employees = data;
    });

    this.api.machinesList().subscribe((data:any)=>{
      this.machines = data;
    });
    
    this.api.getAllInterventionsList().subscribe((data:any)=>{
      this.interventions = data;
    });


    this.api.getMoreData().subscribe((data:any)=>{
      this.data = data;
    });
    


  }

}
