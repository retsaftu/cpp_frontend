import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from "angularx-social-login";
import { Page404Component } from './page404/page404.component';
import { NoteComponent } from './note/note.component';
import { environment } from 'src/environments/environment';
import { ContestComponent } from './contest/contest.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProblemComponent } from './problem/problem.component';
import { StatusComponent } from './status/status.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ContestsComponent } from './contests/contests.component';
import { ProblemNavbarComponent } from './problem-navbar/problem-navbar.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemStatusComponent } from './problem-status/problem-status.component';
import { ProblemLeaderBoardComponent } from './problem-leader-board/problem-leader-board.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NotesComponent,
    CreationFormComponent,
    AuthPageComponent,
    Page404Component,
    NoteComponent,
    ContestComponent,
    TasksComponent,
    ProblemComponent,
    StatusComponent,
    LeaderBoardComponent,
    ContestsComponent,
    ProblemNavbarComponent,
    ProblemListComponent,
    ProblemStatusComponent,
    ProblemLeaderBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientID)
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
