import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client-ts';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private userManager: UserManager;
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  private oidcConfig: UserManagerSettings = {
    authority: 'https://your-identity-provider.com',
    client_id: 'your-client-id',
    redirect_uri: window.location.origin + '/callback',
    post_logout_redirect_uri: window.location.origin,
    response_type: 'code',
    scope: 'openid profile email',
    automaticSilentRenew: true,
    silent_redirect_uri: window.location.origin + '/assets/silent-renew.html'
  };

  constructor() {
    // this.userManager = new UserManager(this.oidcConfig);
    this.setupEvents();
    this.loadUser();
  }

  private setupEvents(): void {
    // this.userManager.events.addUserLoaded((user) => {
    //   this.userSubject.next(user);
    // });

    // this.userManager.events.addUserUnloaded(() => {
    //   this.userSubject.next(null);
    // });

    // this.userManager.events.addAccessTokenExpiring(() => {
    //   console.log('Token expiring...');
    // });

    // this.userManager.events.addAccessTokenExpired(() => {
    //   console.log('Token expired');
    //   this.login();
    // });
  }

  private async loadUser(): Promise<void> {
    // const user = await this.userManager.getUser();
    this.userSubject.next({} as User);
  }

  async login(): Promise<void> {
    // await this.userManager.signinRedirect();
  }

  async handleCallback(): Promise<User> {
    // const user = await this.userManager.signinRedirectCallback();
    this.userSubject.next(  {} as User);
    return {} as User;
  }

  async logout(): Promise<void> {
    // await this.userManager.signoutRedirect();
  }

  getUser(): User | null {
    return this.userSubject.value;
  }

  getAccessToken(): string | undefined {
    return this.userSubject.value?.access_token;
  }

  isAuthenticated(): boolean {
    const user = this.userSubject.value;
    return user !== null && !user.expired;
  }
}