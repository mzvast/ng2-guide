import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserService } from './user.service';
import { Logger, EvenBetterLogger } from './logger.service';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  imports: [ BrowserModule ],
  providers: [
    UserService,
    EvenBetterLogger,
    {provide: Logger, useExisting: EvenBetterLogger}],
  declarations: [ AppComponent, HeroesComponent, HeroListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

