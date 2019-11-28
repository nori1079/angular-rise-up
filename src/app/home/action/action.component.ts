import { Component, OnInit, Input } from '@angular/core';
import { Action } from 'src/app/interfaces/action';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() action: Action;
  maxExp = 400;

  constructor() { }

  ngOnInit() {
  }

  getExpPercentage(): number {
    return this.action.exp / this.maxExp * 100;
  }

}
