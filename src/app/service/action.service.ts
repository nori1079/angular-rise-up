import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from '../interfaces/action';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  createAction(action: Action) {
    const id = this.db.createId();
    return this.db.doc(`actions/${id}`).set(action)
      .then(() => {
        this.snackBar.open('祈りを作成しました', null, {
          duration: 2000
        });
        this.router.navigateByUrl('/');
      });
  }


  getAction(trainerId: string): Observable<Action> {
    return this.db
      .collection<Action>('actions', ref => ref.where('trainerId', '==', trainerId))
      .valueChanges()
      .pipe(
        map(actions => {
          if (actions.length) {
            return actions[0];
          } else {
            return null;
          }
        })
      );
  }
}
