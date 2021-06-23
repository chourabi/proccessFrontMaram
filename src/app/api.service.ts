import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addNewVehicule(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/vehicules/add',data,
      
      httpOptions

    )
  }

  
  addNewMachine(name){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/machines/add',{name:name},
      
      httpOptions

    )
  }



  machinesList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/machines/list',
      
      httpOptions

    )
  }
 





 
  


  notificationsList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/list',
      
      httpOptions

    )
  }

  updateNotifications(){
        
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/update',
      
      httpOptions

    )
  }
  



  


  getEmployeesList(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/list',
      
      httpOptions

    )
  }



  deleteEmployee(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/delete/'+id,
      
      httpOptions

    )
  }


  deleteMachine(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/machines/delete/'+id,
      
      httpOptions

    )
  }


  addNewIntervention( data ){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/interventions/add',data,
      
      httpOptions

    )
  }


  getMyInterventions(){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/interventions/mylist',
      
      httpOptions

    )
  }

  getAllInterventionsList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/interventions/list',
      
      httpOptions

    )
  }



  getMoreData(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/data/list',
      
      httpOptions

    )
  }





}
