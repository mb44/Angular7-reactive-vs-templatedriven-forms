import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Use for template driven forms: FormsModule
// Use for reactive forms: ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Use for reactive forms

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
