import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { DashComponent } from './dash/dash.component';

import { DashboardComponent } from './dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { HomeComponent } from './home/home.component';
import { InteventionsAdminComponent } from './inteventions-admin/inteventions-admin.component';
import { InteventionsComponent } from './inteventions/inteventions.component';
import { MachinesComponent } from './machines/machines.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component:HomeComponent , children:[
    { path:"", component:DashComponent },
    { path:"dash", component:DashComponent },

    { path:'admin-employees', component:EmployeesManagemenetComponent },
    { path:'admin-employees-add', component:EmployeeAddComponent },
    { path:'admin-employees-edit/:id', component:EmployeeEditComponent },

    { path:'employee-add-intervention', component:AddInterventionComponent },
    { path:'admin-add-machine', component:AddMachineComponent },
    { path:'interventions', component:InteventionsComponent },
    { path:'admin-interventions', component:InteventionsAdminComponent },
    
    { path:'machines', component:MachinesComponent }
    
    

    
    
    
    

    
    
    
    
    
    
    
  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
