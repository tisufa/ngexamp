import { IObject } from 'src/app/core/interfaces';

export class QueryParams {
  public static create(obj: IObject): string {
    let queryParams = '';
    Object.keys(obj).forEach((key: string) => {
      const value = obj[key];
      if (typeof value === 'undefined' || value === null) return;
      queryParams += queryParams ? `&${key}=${value}` : `${key}=${value}`;
    });
    return queryParams ? `?${queryParams}` : '';
  }
}
