// auth.service.ts
import { Injectable, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    console.log("hello");
    
  }
  
  user$ = this.fireAuth.authState.pipe(
    map(user => {
      if (user) {
        // If user is logged in, return user object
        return user;
      } else {
        // If user is not logged in, return null
        return null;
      }
    })
  );

  login(email:string, password:string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token', 'true');
      this.router.navigate(['/userpage']);

    }).catch((err) => {
      alert(err.message);
      this.router.navigate(['/login']);
    })

  }

  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err.message);
      this.router.navigate(['/login']);
    })
  }

  logOut(){
    this.fireAuth.signOut().then(()=>{
      localStorage.setItem('token', 'false');
      this.router.navigate(['/login']);

    })
  }
  ngOnInit(): void {
    console.log(this.fireAuth);
    console.log("this is auth service page");
  }
}
