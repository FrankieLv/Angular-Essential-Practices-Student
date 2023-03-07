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
export class App {}

bootstrapApplication(App);
