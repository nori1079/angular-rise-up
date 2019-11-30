import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/interfaces/action';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servise/auth.service';
import { ActionService } from 'src/app/service/action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  action$: Observable<Action> = this.actionService.getAction(
    this.authService.uid
  );

  constructor(
    private actionService: ActionService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
