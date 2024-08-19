import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-angular-numeric-inputs',
  templateUrl: './angular-numeric-inputs.component.html',
  styleUrls: ['./angular-numeric-inputs.component.css']
})
export class AngularNumericInputsComponent implements OnInit {

  @Input("inputCount") inputCount: number=5;
  inputs: number[] = [];

  @Output('code') codeComplete = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputCount']) {
      this.inputs = Array(this.inputCount).fill(0).map((x, i) => i);
    }
  }

  constructor() {
  }

  ngOnInit() {
    const firstInput = document.getElementById('otpInput0');
    (firstInput as HTMLElement).focus();
  }

  onInput(event: any, index: number): void {
    const inputElement = event.target;
    const nextInput = document.getElementById('otpInput' + (index + 1));
    if (inputElement.value.length === 1) {
      if (nextInput) {
        (nextInput as HTMLElement).focus();
      } else {
      }
    }

    let values = '';
    for (let index = 0; index < this.inputCount; index++) {
      const input = <HTMLInputElement>document.getElementById('otpInput' + index);
      if (input && input.value) {
        values += input.value;
      }
    }
    this.codeComplete.emit(Number(values));
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    const prevInput = document.getElementById('otpInput' + (index - 1));

    if (event.key === 'Backspace' && inputElement.value === '' && prevInput) {
      (prevInput as HTMLElement).focus();
      (prevInput as HTMLInputElement).value = ''; 
    }
  }
}