import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { MatSnackBar } from '@angular/material';
import { UiService } from '../shared/ui.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    // private user: User;
    private isAuthenticated = false;

    constructor(private router: Router,
                private afAuth: AngularFireAuth,
                private trainingService: TrainingService,
                private snackBar: MatSnackBar,
                private uiService: UiService) {}

    initAuthListener() {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/training']);
        } else {
          this.trainingService.cancelSubscription();
          this.isAuthenticated = false;
          this.authChange.next(false);
          this.router.navigate(['/login']);
        }
      });
    }

    registerUser(authData: AuthData) {
        // this.user = {
        //     email: authData.email,
        //     userId: Math.round(Math.random() * 10000).toString()
        // };
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
                console.log(result);
                this.uiService.loadingStateChanged.next(false);
            }
        ).catch(error => {
                this.uiService.loadingStateChanged.next(false);
                console.error(error);
                this.snackBar.open(error.message, null, {
                  duration: 3000
                });
            });
    }

    logIn(authData: AuthData) {
        // this.user = {
        //     email: authData.email,
        //     userId: Math.round(Math.random() * 10000).toString()
        // };
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
                console.log(result);
                this.uiService.loadingStateChanged.next(false);
            }
        ).catch(error => {
                this.uiService.loadingStateChanged.next(false);
                console.error(error);
                this.snackBar.open(error.message, null, {
                  duration: 3000
                });
            });
    }

    logOut() {
        this.afAuth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }

}
