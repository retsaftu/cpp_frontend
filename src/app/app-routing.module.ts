import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from "./auth-page/auth-page.component";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from './notes/notes.component';
import { ContestComponent } from "./contest/contest.component";
import { ContestsComponent } from "./contests/contests.component";

import { Page404Component } from "./page404/page404.component";

import { AuthGuardService } from './services/auth-guard.service';

import { ProblemComponent } from "./problem/problem.component";
import { StatusComponent } from "./status/status.component";
import { LeaderBoardComponent } from "./leader-board/leader-board.component";

import { TasksComponent } from "./tasks/tasks.component";

const solveRoutes: Routes = [
  {path: "tasks", component: TasksComponent, canActivate: [AuthGuardService]}
];

const taskRoutes: Routes = [
  {path: "problem", component: ProblemComponent, canActivate: [AuthGuardService]},
  {path: "status", component: StatusComponent, canActivate: [AuthGuardService]},
  {path: "leaderBoard", component: LeaderBoardComponent, canActivate: [AuthGuardService]},

  {path: "problem/:index", component: ProblemComponent, canActivate: [AuthGuardService]},
  {path: "problem/:index", component: ProblemComponent, children: solveRoutes, canActivate: [AuthGuardService]}
];

const routes: Routes = [
  {path: "", component: AuthPageComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuardService]},
  {path: "contest", component: ContestComponent, canActivate: [AuthGuardService]},
  {path: "contests", component: ContestsComponent, canActivate: [AuthGuardService]},



  {path: "contest/:id", component: ContestComponent, canActivate: [AuthGuardService]},
  {path: "contest/:id", component: ContestComponent, children: taskRoutes, canActivate: [AuthGuardService]},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
