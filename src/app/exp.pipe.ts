import { Pipe, PipeTransform } from '@angular/core';
import { Action } from './interfaces/action';

const expTable = [
  20,
  40,
  100,
  250,
  500,
  1000,
  1500,
  4000,
  10000
];

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(action: Action, ...args: any[]): any {
    const totalExp = action.exp;
    const level = action.level;
    const baseExp = expTable[level - 2] || 0;
    const nextExp = expTable[level - 1] - baseExp;
    const exp = totalExp - baseExp;
    return exp + ' / ' + nextExp;
  }

}
