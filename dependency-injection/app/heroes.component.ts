import { APP_CONFIG, AppConfig } from './app-config';
import { Component, Inject }          from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';
@Component({
  selector: 'my-heroes',
  providers: [heroServiceProvider],
  template: `
  <h2>{{title}}</h2>
  <hero-list></hero-list>
  `
})
export class HeroesComponent {
  title: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
  }
 }
