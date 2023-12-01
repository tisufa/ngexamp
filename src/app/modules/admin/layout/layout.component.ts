import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: '.admin-outer-wrapper',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AdminLayoutComponent extends BaseComponent {
  constructor() {
    super('module.admin.layout');
  }

  protected onInit(): void {
    this.setStateReady();
  }

  public handleSignOut(): void {
    this.globalService.modal
      .confirmation({
        header: `${this.moduleCode}.modal.confirmation.header.signOut`,
        message: `${this.moduleCode}.modal.confirmation.message.signOut`,
        positiveButton: 'app.button.yes',
      })
      .subscribe((result: boolean) => {
        if (!result) return;
        this.globalService.session.out();
        this.router.navigate(['/auth/sign-in']);
        this.globalService.toast.showSuccess(
          `${this.moduleCode}.toast.success.signOut`
        );
      });
  }
}
