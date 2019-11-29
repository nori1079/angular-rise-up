import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afUser$.subscribe(user => console.log(user));
  }

  login() {
    this.afAuth.auth.signInWithPopup(
      new auth.GithubAuthProvider()
    );
  }

  logaut() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/welcome');
  }
}
