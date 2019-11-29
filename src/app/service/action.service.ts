import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from '../interfaces/action';
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  createVom(action: Action) {
    const id = this.db.createId();
    return this.db.doc(`actions/${id}`).set(action)
      .then(() => {
        this.snackBar.open('祈りを作成しました', null, {
          duration: 2000
        });
      });
  }
}
