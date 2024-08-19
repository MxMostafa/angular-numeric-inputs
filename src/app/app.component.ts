import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-numeric-inputs';
  inputCount:number=5;
  getCode(value){
    console.log('value : ',value);
  }
}
