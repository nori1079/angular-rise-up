import { Component } from '@angular/core';
import { AuthService } from './servise/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.authService.afUser$;
  constructor(
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logaut();
  }
}
