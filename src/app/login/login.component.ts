import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
  }
}
