import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  counter: number = 100
  constructor() { }
  addOne(){
    this.counter++;
  }
}
