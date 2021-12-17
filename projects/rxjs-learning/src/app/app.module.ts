import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragDemoComponent } from './drag-demo/drag-demo.component';
import { RunImgComponent } from './run-img/run-img.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDemoComponent,
    RunImgComponent,
    AutoCompleteComponent,
    SubjectDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
