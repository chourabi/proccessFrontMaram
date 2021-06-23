import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  machines:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getMachinesList() 
  }

  getMachinesList(){
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.api.machinesList().subscribe((data)=>{
      console.log(data);
      
      this.machines = data;
    })

  }


  deleteMachine(id){
      if (confirm("Voulez-vous vraiment supprimer cet élément ?")) {
        this.api.deleteMachine(id).subscribe((data:any)=>{
          this.getMachinesList();
        },(err)=>{
          alert("Une erreur s'est produite. Veuillez réessayer.")
        })
      }
    
  }
}
