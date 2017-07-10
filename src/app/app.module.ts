import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
// import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing/app-routing.module";

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    //CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
