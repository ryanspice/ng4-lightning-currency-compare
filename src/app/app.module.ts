import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { Http, Response, RequestOptions, Headers } from '@angular/http';


import { AppComponent } from './app.component';


import {SelectLightning} from "../components/select";


@NgModule({
	entryComponents:[
		SelectLightning
	],
  declarations: [
    AppComponent,
	SelectLightning
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
//  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
