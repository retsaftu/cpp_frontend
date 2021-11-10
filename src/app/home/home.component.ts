import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username = '';
  public color = 'rgb(0, 0, 0)';

  constructor(private router: Router) { }

  ngOnInit(): void {
    let check = localStorage.getItem("userInfo");
    if(check && JSON.parse(check) != {}){
      this.username = JSON.parse(check).username;
    } else{
      this.router.navigate(['']);
    }
    setInterval(() => {
      let red = Math.round(Math.random() * 255).toString();
      let green = Math.round(Math.random() * 255).toString();
      let blue = Math.round(Math.random() * 255).toString();
      this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    }, 1000);
  }

}
