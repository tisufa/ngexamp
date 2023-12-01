export class AppConstant {
  public static instance: AppConstant;

  public readonly APP_NAME = 'APP NAME';

  public readonly SESSION_ID = 'sid';
  public readonly LANGUAGE_KEY = 'lang';
  public readonly TOAST_TIMEOUT = 3000;

  // default currency formatter
  public readonly CURRENCY_CODE = 'IDR';
  public readonly CURRENCY_DISPLAY = 'Rp';
  public readonly CURRENCY_DIGITS_INFO = '0.0-0';
  public readonly CURRENCY_LOCALE = '';

  // default date formatter
  public readonly SHORT_DATE_FORMAT = 'dd MMMM yyyy';
  public readonly LONG_DATE_FORMAT = 'dd MMMM yyyy; hh:mm:ss';

  public readonly DUMMY_USERNAME = 'admin';
  public readonly DUMMY_PASSWORD = 'password';

  private constructor() {}

  public static create(): AppConstant {
    if (this.instance) return this.instance;
    this.instance = new AppConstant();
    return this.instance;
  }
}
