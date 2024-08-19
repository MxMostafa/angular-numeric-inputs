import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularNumericInputsComponent } from './angular-numeric-inputs/angular-numeric-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularNumericInputsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
