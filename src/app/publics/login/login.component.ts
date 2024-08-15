import { Component } from '@angular/core';
import { LoginModule } from './login/login.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
