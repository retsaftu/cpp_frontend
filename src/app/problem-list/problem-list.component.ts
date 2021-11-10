import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  constructor(private http: HttpClient,public router: Router) { }
  @Input() task: any;
  images:any;
  public userId = '';
  public userSubmission:any
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: '#ddd'},
    {text: 'Good', cols: 1, rows: 1, color: '#ddd'},
    {text: 'Two', cols: 1, rows: 3, color: '#ddd'},
    {text: 'Three', cols: 1, rows: 4, color: '#ddd'},
    {text: 'Four', cols: 2, rows: 5, color: '#ddd'},
  ];

  ngOnInit(): void {


  }
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  // submmissionAppend(userSubmission:any){
  //   console.log("sumsumsums"+userSubmission);
  // }
  onSubmit(index:any){
    let check = localStorage.getItem("userInfo");
    console.log("++++++++++++++++++++++++++++==",check);
    
    if(check && JSON.parse(check) != {}){
      this.userId = JSON.parse(check).userId;
    }
    console.log(this.userId);
    console.log(this.task.code);

    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('indexTask', index);
    formData.append('userId', this.userId);
    const contest_id = this.router.url.replace( /contest/g, "" ).replace( /problem/g, "" ).replace("/", "").replace("/", "").replace("/", "");
    formData.append('contest_id', contest_id);
    formData.append('task_name', this.task.name);
    formData.append('task_input', this.task.input);
    formData.append('task_output', this.task.output);
    console.log(this.task);

    console.log();

    console.log(formData);

    console.log(index);

    // this.http.post<any>('http://localhost:49160//file', formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
    this.http.post<any>('http://localhost:8001/file', formData).subscribe(
      (res) => {

        this.userSubmission=res.submission;
        console.log(this.userSubmission);
        // const userSubmissionForm = new FormData();
        // formData.append('index', res.submission);
        // this.http.post('http://127.0.0.1:3000/api/submission', formData)
        // .subscribe(data => {
        //   console.log(data);
        // });
        // submmissionAppend(this.userSubmission);
        // console.log(this.userSubmission.submission);
        // const submissionData = new FormData();
        // submissionData.append('submission', this.userSubmission.submission);
        // console.log(submissionData);
        //
        // this.http.post<any>('http://localhost:3000/api/submission', submissionData).subscribe(
        //   (res) => {
        //     console.log(res);
        //   },
        //   (err) => console.log(err)
        // );
      },
      (err) => console.log(err)
    );
  }


}
