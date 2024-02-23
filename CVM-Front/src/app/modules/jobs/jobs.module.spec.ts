import { JobsModule } from './jobs.module';

describe('JobsModule', () => {
  const module: JobsModule = new JobsModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
