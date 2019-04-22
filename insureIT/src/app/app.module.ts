import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { EventsbarComponent } from './eventsbar/eventsbar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavComponent,
    AboutComponent,
    MainComponent,
    EventsbarComponent
  
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
