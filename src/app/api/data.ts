import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book';
import { User } from '../models/user';

export class Data implements InMemoryDbService {
  createDb(): Record<string, User[] | Book[]> {
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
      }
    ];

    const books: Book[]=[
      {
        id: 0,
        name: 'Book 1',
        author: 'Author 1',
        publisher: 'Publisher 1'
      },
      {
        id: 0,
        name: 'Book 2',
        author: 'Author 2',
        publisher: 'Publisher 2'
      }
    ];

    return { users, books };
  }
}
