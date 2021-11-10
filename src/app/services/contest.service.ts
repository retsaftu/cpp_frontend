import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContestModel } from '../../models/ContestModel';
import { TaskModel } from '../../models/TaskModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private http: HttpClient) { }

  getContests(){
    console.log(environment.serverURL + '/api/contests/');
    console.log(this.http.get(environment.serverURL + '/api/contests/'));

    return this.http.get(environment.serverURL + '/api/contests/');
  }
  getTasks(id:any){
    console.log(environment.serverURL + '/api/contests/');
    console.log(this.http.get(environment.serverURL + '/api/contests/'));

    return this.http.get(environment.serverURL + '/api/contests/'+id+"/tasks");
  }
  getTasksId(contest_id:any,id:any){
    console.log(environment.serverURL + '/api/contests/');
    console.log(this.http.get(environment.serverURL + '/api/contests/'));

    return this.http.get(environment.serverURL + '/api/contests/'+contest_id+'/tasks/'+id+'/tasks');
  }
}
