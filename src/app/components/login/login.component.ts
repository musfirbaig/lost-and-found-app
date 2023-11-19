import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService) { }



  login() {
    // Implement your login logic here
    console.log('Login clicked');
    this.authService.login(this.email, this.password);
  }
  ngOnInit(): void {
  }

}
