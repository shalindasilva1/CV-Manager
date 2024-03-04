import { UserManagementService } from "./usermanagement.service";

describe('UserManagementService', () => {
  const service: UserManagementService = new UserManagementService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
