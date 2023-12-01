import { IEnvirontment } from '../interfaces';
import { ConfigModel } from '../models';

export class Config {
  public backendAddress: string;
  public defaultLang: string;
  public environtment: IEnvirontment;
  private constructor() {}

  public static create(model: ConfigModel): Config {
    const config = new Config();
    config.backendAddress = model.backendAddress;
    config.environtment = model.environtment;
    config.defaultLang = 'id';
    return config;
  }

  public static createEmpty(): Config {
    return new Config();
  }
}
