export * from './categories.service';
import { CategoriesService } from './categories.service';
export * from './cvs.service';
import { CvsService } from './cvs.service';
export * from './jobs.service';
import { JobsService } from './jobs.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [CategoriesService, CvsService, JobsService, UserService];
