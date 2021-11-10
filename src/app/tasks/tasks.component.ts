import { Component, OnInit } from '@angular/core';
import { ContestService } from '../services/contest.service';
import { TaskModel } from '../../models/TaskModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: TaskModel[] = [];
  constructor(public router: Router,private contestService: ContestService) { }

  ngOnInit(): void {
    console.log(this.router.url);

  }

}
