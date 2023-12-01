import { AppConstant } from '../constant/app.constant';

export class Session {
  public sessionId: string | null;

  private constructor() {}

  public setSessionId(sessionId: string | null): void {
    this.sessionId = sessionId;
  }

  public in(sessionId: string): void {
    this.sessionId = sessionId;
    localStorage.setItem(AppConstant.create().SESSION_ID, sessionId);
  }

  public get isLoggedIn(): boolean {
    return !!this.sessionId;
  }

  public out(): void {
    this.sessionId = null;
    localStorage.removeItem(AppConstant.create().SESSION_ID);
  }

  public static create(): Session {
    const session = new Session();
    return session;
  }
}
