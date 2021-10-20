import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevUIModule } from 'ng-devui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutTopSideComponent } from './layout-top-side/layout-top-side.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutTopSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DevUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
