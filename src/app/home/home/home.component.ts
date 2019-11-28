import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/interfaces/action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  action: Action = {
    name: 'テスト祈り',
    exp: 200,
    level: 4,
    avatarURL: '/assets/images/action-1.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
