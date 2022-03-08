import { Component } from '@angular/core';
import { Object, objects } from './object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailwind teszt vagyok';
  objects = objects;

  newObject!: Object;

  constructor() {
    this.initializeObject();
  }

  initializeObject() {
    this.newObject = {
      id: 0,
      name: '',
      description: '',
      amount: 0
    }
  }

  isUnavailable(object: Object) {
    return object.amount < 1;
  }

  increaseStock(object: Object) {
    object.amount++;
  }

  decreaseStock(object: Object) {
    if (object.amount > 0) {
      object.amount--;  
    }    
  }

  removeObject(object: Object) {
    const index = this.objects.indexOf(object);

    if (index > -1) {
      this.objects.splice(index, 1);
    }
  }

  addObject() {
    this.objects.push(this.newObject);
    this.initializeObject();
  }
}
