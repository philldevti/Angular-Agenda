import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
 
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MainModule } from "./main/main.module";

import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app.routing';
import { FilterPipe } from './main/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MainModule,
    HttpModule
  ],
  providers: [AppService,AuthGuard, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
