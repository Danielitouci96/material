import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { SharedModule } from './components/shared/shared.module';

//Components
import { LoginComponent } from './components/login/login.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  exports:[
    MatChipsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatChipsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
