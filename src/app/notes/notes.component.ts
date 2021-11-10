import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NoteModel } from '../../models/NoteModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public creation = false; 
  public notes: NoteModel[] = [];
  public userInfo: any;

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit(): void {
    let userInfoStr = localStorage.getItem("userInfo");
    if(userInfoStr && JSON.parse(userInfoStr) != {}){
      this.userInfo = JSON.parse(userInfoStr);
      this.noteService.getNotes(this.userInfo.userId).subscribe((result: any) => {
        if(result.success){
          this.notes = result.notes.reverse();
        }else{
          alert("Something went wrong");
        }
      });
    }
    else{
      this.router.navigate(['']);
    }
  }

  startCreatingNewNote(): void{
    this.creation = true;
  }

  cancelCreation(): void{
    this.creation = false;
  }

  createNewNote(newNote: NoteModel): void{
    this.notes.unshift(newNote)
  }

  deleteNoteFromList(note: NoteModel): void{
    this.notes.splice(this.notes.indexOf(note), 1)
  }

}
