import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestService } from '../services/contest.service';
import { TaskModel } from '../../models/TaskModel';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  public tasks: TaskModel[] = [];
  constructor(public router: Router,private contestService: ContestService) { }
  id: any;
  ngOnInit(): void {

    console.log(this.router.url.replace( /contest/g, "" ).replace( /problem/g, "" ).replace("/", "").replace("/", "").replace("/", ""));
    this.id=this.router.url.replace( /contest/g, "" ).replace( /problem/g, "" ).replace("/", "").replace("/", "").replace("/", "");
    this.contestService.getTasks(this.id).subscribe((result: any) => {
    console.log("asdfasdf",result.tasks);
      
      
    
        console.log(result.tasks[0].tasks);
        this.tasks=result.tasks;

        // this.tasks = result.contests.reverse();
        // console.log(this.contests);

     
    });
  }
  isContest(){
    return this.router.url === '/contest/'+this.id+'/problem';
  }


}
