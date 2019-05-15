import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { EventsbarComponent } from './eventsbar/eventsbar.component';
import { LogComponent } from './log/log.component'

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'home', component: PageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'events', component: EventsbarComponent},
  { path: 'log', component: LogComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }