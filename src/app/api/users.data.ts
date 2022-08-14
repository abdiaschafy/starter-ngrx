import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

export class UsersData implements InMemoryDbService {
  createDb(): Record<string, User[]> {
    const users: User[]=[
      {
        id: 0,
        username: 'test-1',
        isAdmin: true,
      },
      {
        id: 1,
        username: 'test-2',
        isAdmin: false,
      },
      {
        id: 2,
        username: 'test-3',
        isAdmin: true,
      },
      {
        id: 3,
        username: 'test-4',
        isAdmin: false,
      },
      {
        id: 4,
        username: 'test-5',
        isAdmin: true,
      }
    ];

    return { users };
  }
}
