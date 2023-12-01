import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export const translateFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
};
