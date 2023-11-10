import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  Display(name:string):string
  {
    return 'Hello' + name
  }

  constructor() { }
}
