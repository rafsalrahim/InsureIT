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
import { LogComponent } from './log/log.component';
//something



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavComponent,
    AboutComponent,
    MainComponent,
    EventsbarComponent,
    LogComponent,

  
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    //something

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
