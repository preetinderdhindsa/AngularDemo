// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
template : `<div><h1>Employee Details {{name}}</h1><my-employee></my-employee> </div>`
})
export class AppComponent{
  name : string = "helly Angular";
}