import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragDemoComponent } from './drag-demo/drag-demo.component';
import { RunImgComponent } from './run-img/run-img.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { SimulateEffectComponent } from './simulate-effect/simulate-effect.component';
import { DragDirective } from './drag.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragDemoComponent,
    RunImgComponent,
    AutoCompleteComponent,
    SubjectDemoComponent,
    SimulateEffectComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
