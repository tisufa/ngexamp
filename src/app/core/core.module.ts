import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { initializationFactory } from './factory/initialization.factory';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ConfigModel } from './models';
import { InitializationService } from './services';

@NgModule({
  imports: [InterceptorsModule],
})
export class CoreModule {
  constructor() {}

  public static forRoot(config: ConfigModel): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        InitializationService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializationFactory(config),
          deps: [InitializationService],
          multi: true,
        },
      ],
    };
  }
}
