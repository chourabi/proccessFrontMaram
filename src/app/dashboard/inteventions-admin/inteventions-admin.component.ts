import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inteventions-admin',
  templateUrl: './inteventions-admin.component.html',
  styleUrls: ['./inteventions-admin.component.css']
})
export class InteventionsAdminComponent implements OnInit {

  interventions: any[] = [];

  dateFilter = "0";
  employeesFilter = "0"
  machineFilter = "0";

  employees = [];
  machines = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getInterventions();

    this.api.getAllInterventionsList().subscribe((data: any[]) => {
      this.interventions = data.sort((a, b) => a.id - b.id).reverse();
    })

    this.api.getEmployeesList().subscribe((data:any)=>{
      this.employees = data;
    });

    this.api.machinesList().subscribe((data:any)=>{
      this.machines = data;
    });
    



  }


  getInterventions() {
    this.api.getAllInterventionsList().subscribe((data: any[]) => {
      console.log(data);

      let tmpList = data;
      let lastList = [];


      tmpList.map((i) => {
        // check date filter
        if (this.dateFilter != "0") {
          if (this.dateFilter == "1") {

            let today = new Date();
            let iDate = new Date(i.utilTimestamp);
            if (
              (today.getDate() == iDate.getDate()) &&
              (today.getMonth() == iDate.getMonth()) &&
              (today.getFullYear() == iDate.getFullYear())
            ) {
              lastList.push(i);
            }

          } else if (this.dateFilter == "2") {
            let today = new Date();
            let iDate = new Date(i.utilTimestamp);

            if (
              
              (today.getMonth() == iDate.getMonth()) &&
              (today.getFullYear() == iDate.getFullYear())
            ) {
              lastList.push(i);
            }
          }

        }else{
          lastList.push(i);
        }

        // continue check for employee and machine
        if (this.employeesFilter != "0") {
          lastList = lastList.filter((i)=> i.user.id == this.employeesFilter )
        }

        // continue check for machine and machine
        if (this.machineFilter != "0") {
          lastList = lastList.filter((i)=> i.machine.id == this.machineFilter )
        }
        

        this.interventions = lastList.sort((a, b) => a.id - b.id).reverse();


      })




    })
  }

  formatParameter(data) {
    return JSON.parse(data);
  }

  updateList(e) {
    const v = e.target.value;
    this.dateFilter = v;
    this.getInterventions();

  }

  updateListEmployee(e) {
    const v = e.target.value;
    this.employeesFilter = v;
    this.getInterventions();
  }


  machinesFilter(e) {
    const v = e.target.value;
    this.machineFilter = v;
    this.getInterventions();
  }

}
