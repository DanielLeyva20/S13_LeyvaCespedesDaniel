import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AuthService } from './core/services/auth.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

describe('AuthService', () => {
  let auth: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    auth = TestBed.inject(AuthService);
  });

  it('rejects wrong credentials', () => {
    expect(auth.login('admin@biblioteca.com', 'incorrecta')).toBeFalse();
    expect(auth.isAuthenticated()).toBeFalse();
  });

  it('accepts valid credentials and stores the session', () => {
    expect(auth.login('admin@biblioteca.com', '123456')).toBeTrue();
    expect(auth.isAuthenticated()).toBeTrue();
  });

  it('clears the session on logout', () => {
    auth.login('admin@biblioteca.com', '123456');
    auth.logout();
    expect(auth.isAuthenticated()).toBeFalse();
  });
});
