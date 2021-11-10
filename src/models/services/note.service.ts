import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteModel } from '../../models/NoteModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes(userId: string){
    return this.http.get(environment.serverURL + '/notes/' + userId);
  }

  createNote(note: any){
    return this.http.post(environment.serverURL + '/notes/api/create', note);
  }

  deleteNote(noteId: String){
    return this.http.delete(environment.serverURL + '/notes/api/delete/' + noteId);
  }

  updateNote(updatedNote: NoteModel){
    return this.http.put(environment.serverURL + '/notes/api/update', updatedNote)
  }

}
