import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ensure FormsModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
