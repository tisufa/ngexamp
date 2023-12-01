import { Injectable } from '@angular/core';
import { Config } from '../domains';
import { GlobalService } from '../global/global.service';
import { ConfigModel } from '../models';

@Injectable()
export class InitializationService {
  constructor(private _global: GlobalService) {}

  public init(config: ConfigModel): Promise<boolean> {
    return new Promise(async (resolve) => {
      await this.loadAndSetLocalConfiguration(config);
      await this.loadAndSetBackendConfiguration();
      await this.loadAndSetDefaultLanguage();
      resolve(true);
    });
  }

  private loadAndSetLocalConfiguration(config: ConfigModel): Promise<boolean> {
    return new Promise((resolve) => {
      // set global configuration
      this._global.config = Config.create(config);

      // read and set sessionId
      const sessionID: string | null = localStorage.getItem(
        this._global.constant.SESSION_ID
      );
      this._global.session.setSessionId(sessionID);

      resolve(true);
    });
  }

  private loadAndSetBackendConfiguration(): Promise<void> {
    return new Promise((resolve) => {
      // check if session exists, then get user by session
      if (this._global.session.sessionId) {
        // do some stuff
        resolve();
      } else {
        resolve();
      }
    });
  }

  private loadAndSetDefaultLanguage(): Promise<void> {
    return new Promise((resolve) => {
      const { defaultLang } = this._global.config;
      this._global.translate.setDefaultLang(defaultLang);
      resolve();
    });
  }
}
