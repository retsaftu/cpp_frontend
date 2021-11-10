import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteModel } from 'src/models/NoteModel';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({opacity: 1}))
      ])
    ]),

    trigger('openClose', [
      state('open', style({
        maxHeight: '15em',
        overflowY: 'auto',
        opacity: 1,
        marginBottom: '3px'
      })),
      state('close', style({
        height: '0em',
        overflowY: 'hidden',
        opacity: 0,
        marginBottom: '0px',
      })),
      transition('open <=> close', [
        animate('0.25s')
      ])
    ]),

    trigger('showHide', [
      transition('void <=> *', [
        style({ bottom: '-5%', display: 'none' }),
        animate('0.5s', style({bottom: '0%', display: 'block'}))
      ])
    ]),
  ]
})
export class NoteComponent implements OnInit {

  @Input() note: any;
  @Output() deleteNoteEvenet = new EventEmitter<NoteModel>();

  public headerOfEditingNote = ''; // header of editing note
  public textOfEditingNote = ''; // text of editing note
  public showNoteContent = false; // responsible for the showing full note
  public editNote = false; // responsible for edit mode
  public showMobileHeaderButtons = false;
  public showEditMobileButtons = false;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
  }

  startEditing(): void{
    this.headerOfEditingNote = this.note.header;
    this.textOfEditingNote = this.note.text;
    this.editNote = true;
    this.showNoteContent = true;
    this.showMobileHeaderButtons = false;
  }

  cancelEditing(): void{
    this.headerOfEditingNote = '';
    this.textOfEditingNote = '';
    this.editNote = false;
    this.showNoteContent = true;
    this.showEditMobileButtons = false;
  }

  updateNote(): void{
    if(this.textOfEditingNote == '' || this.headerOfEditingNote == '' || (this.textOfEditingNote == this.note.text && this.headerOfEditingNote == this.note.header)){
      return;
    }
    this.note.header = this.headerOfEditingNote.trim();
    this.note.text = this.textOfEditingNote.trim();
    this.note.date = String(new Date().toLocaleString('ru-RU'));
    this.noteService.updateNote(this.note).subscribe((result: any) => {
      if(result.success){
        this.headerOfEditingNote = '';
        this.textOfEditingNote = '';
        this.editNote = false;
        this.showNoteContent = true;
      }else{
        alert("Something went wrong");
      }
    });
  }
  
  deleteNote(): void{
    this.noteService.deleteNote(this.note._id).subscribe((result: any) => {
      if(result.success){
        this.deleteNoteEvenet.emit(this.note);
      }else{
        alert("Something went wrong");
      }
    });
  }

  showFullNote(): void{
    this.showNoteContent = !this.showNoteContent;
  }

  expandMobileMendu(): void{
    this.showMobileHeaderButtons = !this.showMobileHeaderButtons;
  }

  showEditMobileMenu(): void{
    this.showEditMobileButtons = !this.showEditMobileButtons;
  }
}
