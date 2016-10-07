import { HeroService } from './hero.service';
import { Logger } from './logger.service';
import { UserService } from './user.service';

let heroServiceFactory = (logger: Logger, userService: UserService) => {
  //传入null作为logger检测optinal是否生效
  return new HeroService(null, userService.user.isAuthorized);
};

export let heroServiceProvider =
{ provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [Logger, UserService]
};
