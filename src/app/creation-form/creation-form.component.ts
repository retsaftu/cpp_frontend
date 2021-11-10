import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteModel } from 'src/models/NoteModel';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  public noteHeader = '';
  public noteText = ''

  @Input() userInfo: any;
  @Output() newNoteCreatedEvent = new EventEmitter<any>();
  @Output() cancelCreationEvent = new EventEmitter<void>();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  createNote(): void{
    if(this.noteText == '' || this.noteHeader == '') {
      return;
    }
    let newNote = {
        userId: this.userInfo.userId,
        header: this.noteHeader.trim(), 
        text: this.noteText.trim(),
        date: String(new Date().toLocaleString('ru-RU'))
    };
    this.noteService.createNote(newNote).subscribe((result: any) => {      
      if(result.success){
        this.newNoteCreatedEvent.emit(new NoteModel(result.noteId, newNote.userId, newNote.header, newNote.text, newNote.date));
        this.noteHeader = '';
        this.noteText = '';
      } else{
        alert("Something went wrong");
      }
    });
  }

  windowMinimize(): void{
    this.cancelCreationEvent.emit();
  }

  cancelCreation(): void{
    this.noteHeader = '';
    this.noteText = ''
    this.cancelCreationEvent.emit();
  }
}
