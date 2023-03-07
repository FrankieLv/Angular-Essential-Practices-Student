import 'zone.js/dist/zone';
import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'myapp.html',
})
export class App {
  value = 'Angular';

  onClick(event: any) {
    console.log('Click Event, value is: ' + event);
  }

  classes = 'bad curly';

  isDisplayed = true;
  list = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

  title = 'Hello Guys';
}

bootstrapApplication(App);
