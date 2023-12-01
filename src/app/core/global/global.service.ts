import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../constant/app.constant';
import { Config, Session } from '../domains';
import { IToast } from '../interfaces';
import { IModal } from '../interfaces/modal.interface';
import { MODAL_CONFIG, TOAST_CONFIG } from '../token';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public config: Config;
  public session: Session;
  public constant: AppConstant;
  public isOnline: boolean;
  constructor(
    @Inject(TOAST_CONFIG) public toast: IToast,
    @Inject(MODAL_CONFIG) public modal: IModal,
    public translate: TranslateService
  ) {
    this.config = Config.createEmpty();
    this.session = Session.create();
    this.constant = AppConstant.create();
  }
}
