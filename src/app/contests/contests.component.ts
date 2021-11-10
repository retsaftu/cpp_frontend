import { Component, OnInit } from '@angular/core';

import { ContestService } from '../services/contest.service';
import { ContestModel } from '../../models/ContestModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {

  public contests: ContestModel[] = [];

  constructor(public router: Router,private contestService: ContestService) { }

  ngOnInit(): void {
    this.contestService.getContests().subscribe((result: any) => {
      console.log(result);
      this.contests = result;
      console.log(this.contests);
      console.log(this.contests[0]);
      console.log(this.contests[0]._id);
      
      // if(result){
      //   // console.log(result);
      //   // console.log(result.contests);
      //   // console.log({result.contests});


      //   // this.contests = result.contests;
      //   console.log(this.contests);

      // }else{
      //   alert("Something went wrong");
      // }
    });
  }

}
