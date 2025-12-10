export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  image: string;
  phone?: string;
  address?: string;
  role?: 'admin' | 'user';
  joined?: string; // ISO date string
}

export const USERS: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: '123456',
    image: 'https://i.pravatar.cc/150?img=1',
    phone: '+1 555-1234',
    address: '123 Admin St, Admin City, USA',
    role: 'admin',
    joined: '2023-01-10'
  },
  {
    id: 2,
    username: 'john',
    email: 'john@example.com',
    password: 'password',
    image: 'https://i.pravatar.cc/150?img=2',
    phone: '+1 555-5678',
    address: '456 Main St, New York, USA',
    role: 'user',
    joined: '2023-03-22'
  },
  {
    id: 3,
    username: 'sarah',
    email: 'sarah@example.com',
    password: 'qwerty',
    image: 'https://i.pravatar.cc/150?img=3',
    phone: '+1 555-9012',
    address: '789 Oak Ave, Los Angeles, USA',
    role: 'user',
    joined: '2023-05-15'
  },
  {
    id: 4,
    username: 'alice',
    email: 'alice@example.com',
    password: 'alice123',
    image: 'https://i.pravatar.cc/150?img=4',
    phone: '+1 555-3456',
    address: '101 Pine St, Chicago, USA',
    role: 'user',
    joined: '2023-06-30'
  },
  {
    id: 5,
    username: 'bob',
    email: 'bob@example.com',
    password: 'bobpass',
    image: 'https://i.pravatar.cc/150?img=5',
    phone: '+1 555-7890',
    address: '202 Cedar Rd, San Francisco, USA',
    role: 'user',
    joined: '2023-07-12'
  }
];
