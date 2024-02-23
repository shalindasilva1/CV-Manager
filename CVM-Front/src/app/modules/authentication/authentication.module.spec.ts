import { AuthenticationModule } from './authentication.module';

describe('AuthenticationModule', () => {
  const module: AuthenticationModule = new AuthenticationModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
