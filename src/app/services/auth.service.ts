import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afUser$.subscribe((user) => console.log(user));
  }

  login() {
    this.afAuth.signInWithPopup(new auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/welcome');
  }
}

/*
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;
  uid: string;
  gitHubId: number;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afUser$.subscribe(user => {
      this.gitHubId = +user.providerData[0].uid;
      this.uid = user && user.uid;
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(
      new auth.GithubAuthProvider()
    ).then(() => {
      this.snackBar.open(`ようこそGitPetへ！🥰`, null, {
        duration: 2000
      });
      this.router.navigateByUrl('/create');
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open('ログアウトしました', null, {
        duration: 2000
      });
    });
    this.router.navigateByUrl('/welcome');
  }
}
*/
