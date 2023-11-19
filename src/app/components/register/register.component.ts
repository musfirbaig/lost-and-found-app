import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private authService: AuthService) { }

  register(){
    this.authService.register(this.username, this.password);
  }

  ngOnInit(): void {
  }


}
