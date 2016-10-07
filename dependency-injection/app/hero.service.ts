import { Injectable, Optional } from '@angular/core';
import { HEROES }     from './mock-heroes';
import { Logger } from './logger.service';
@Injectable()
export class HeroService {
  constructor(
    @Optional() private logger: Logger,
    private isAuthorized: boolean) {}

  getHeroes() {
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    if (this.logger) {
      this.logger.log(`Getting heroes for ${auth} user.`);
    }
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
