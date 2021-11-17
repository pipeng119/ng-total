import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCancelInterceptor } from './http-cancel.interceptor';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { MyLibModule } from 'whp-my-lib';
import { ChildComponent } from './child/child.component'
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AdminComponent,
    ListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyLibModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpCancelInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
