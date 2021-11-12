import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getRandomColor() {
    // create a random value between -100 and 100
    let randValue = Math.floor(Math.random() * 200) - 100
    if (randValue < 0) {
      return `rgb(${0}, ${255}, ${Math.round(-randValue*2.25)})`
    } else if (randValue == 0) {
      return `rgb(${0}, ${255}, ${255})`;
    }
    // else, when randValue > 0
    return `rgb(${Math.round(randValue*2.25)}, ${0}, ${0})`
    
  }

}
