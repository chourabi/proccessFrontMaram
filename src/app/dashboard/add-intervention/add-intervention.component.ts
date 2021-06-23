import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent implements OnInit {

  machines = [];
  errMsg='';
  successMsg='';



  addIntervention = new FormGroup({
    id_machine: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    
  })


  arretProgrammee = [
    { key:"Pauses", selected: false },
    { key:"Reunion-Formation", selected: false },
    { key:"Maintenance 1ére niveau opérateur", selected: false },
    { key:"Maintenance préventive", selected: false },
    { key:"Validation nouveau project", selected: false },
    { key:"Sous charges programmées", selected: false },
  ];

  changementSerie = [
    { key:"Demmarage/arrêt de ligne", selected: false },
    { key:"Changement de série", selected: false },
    { key:"Validation production", selected: false },
    { key:"Validation qualité", selected: false }
  ];
  
  

  repture = [
    { key:"Manque kit/OF", selected: false },
    { key:"Repture composant", selected: false },
];
  
pannesMachines = [
  { key:"Convoyeur/Dépileur/Empileur", selected: false },
  { key:"Serigraphie MPM HIE", selected: false },
  { key:"MY200-1", selected: false },
  { key:"MY200-2", selected: false },
  { key:"Four SEHO power Reflow 2", selected: false },
  { key:"AOI 5K 3D", selected: false },
  { key:"SPI", selected: false },
  
];

  


  derivesProccess = [
    { key:"Convoyeur/Dépileur/Empileuir", selected: false },
    { key:"Serigraphie MPM HIE", selected: false },
    { key:"MY200-1", selected: false },
    { key:"MY200-2", selected: false },
    { key:"Four SEHO Power Reflow 2", selected: false },
    { key:"AOI 5K 3D", selected: false },
    { key:"SPI", selected: false },
    { key:"Autres dérives", selected: false },
    { key:"Coupure courant/Probleme compresseur", selected: false },
    { key:"Probléme outillage", selected: false },
    { key:"Probléme de composants", selected: false },
    { key:"Amélioration process/optimisation", selected: false },


  ];
  

  nonQuality = [
    { key:"2éeme passage AOI", selected: false },
    { key:"Arrét probléme qualité", selected: false },
    { key:"Temps non qualité", selected: false },
  ];
  

  




  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getMachinesList() 
  }



  // functions
  changeState(array,index){
    array[index].selected = !array[index].selected;
  }


  getMachinesList(){
    if (localStorage.getItem('role') != "ROLE_USER") {
      this.router.navigate(['/error-page'])
    }

    this.api.machinesList().subscribe((data:any)=>{
      console.log(data);
      
      this.machines = data;
    })

  }

  addInterventionApi(){

    const intervention = {
      description:this.addIntervention.value.description,
      id_machine: this.addIntervention.value.id_machine,
      parametersString: JSON.stringify({
        arretProgrammee: this.arretProgrammee.filter((e)=> e.selected === true ),
        changementSerie: this.changementSerie.filter((e)=> e.selected === true ),
        repture: this.repture.filter((e)=> e.selected === true ),
        pannesMachines: this.pannesMachines.filter((e)=> e.selected === true ),
        derivesProccess: this.derivesProccess.filter((e)=> e.selected === true ),
        nonQuality: this.nonQuality.filter((e)=> e.selected === true )
        
      }) 
    }

    this.api.addNewIntervention(intervention).subscribe((data:any)=>{

      if (data.id) {
        this.successMsg="Intervention ajoutée avec succès.";
        this.router.navigate(['/dashboard/home/interventions']);
      }
      
    },(err)=>{
      this.errMsg="Une erreur s'est produite. Veuillez réessayer.";
    })
    
  }

}
