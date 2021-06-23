import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inteventions',
  templateUrl: './inteventions.component.html',
  styleUrls: ['./inteventions.component.css']
})
export class InteventionsComponent implements OnInit {

  interventions:any[] = [];

  constructor( private api:ApiService ) { }

  ngOnInit(): void {
    this.getMyInterventions();
  }


  getMyInterventions(){
    this.api.getMyInterventions().subscribe((data:any)=>{
      console.log(data);
      
     this.interventions = data; 
    })
  }

  formatParameter(data){
    return JSON.parse(data);
  }

}
