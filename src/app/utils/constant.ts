import { Frame } from '../models/frame.model';

export const FRAMER =
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2011%2016%22%3E%3Cpath%20d%3D%22M%2011%200%20L%2011%205.333%20L%205.5%205.333%20L%200%200%20Z%20M%200%205.333%20L%205.5%205.333%20L%2011%2010.667%20L%205.5%2010.667%20L%205.5%2016%20L%200%2010.667%20Z%22%20fill%3D%22rgb(34%2C34%2C34)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';

export const ROUTES: any[] = [
  {
    id: 1,
    path: '/',
    name: 'Dashboard',
    icon: 'assets/images/wema-dashboard.png',
  },
  {
    id: 2,
    path: '/requests',
    name: 'Requests',
    icon: 'assets/images/wema-requests.png',
  },
  {
    id: 3,
    path: '/kycs',
    name: 'KYCs',
    icon: 'assets/images/wema-kycs.png',
  },
  {
    id: 4,
    path: '/reports',
    name: 'Reports',
    icon: 'assets/images/wema-note.png',
  },
  {
    id: 5,
    path: '/audit-trail',
    name: 'Audit Trail',
    icon: 'assets/images/wema-audit-trail.png',
  },
  {
    id: 6,
    path: '/users',
    name: 'Users',
    icon: 'assets/images/wema-users.png',
  },
  {
    id: 7,
    path: '/settings',
    name: 'Settings',
    icon: 'assets/images/wema-setting.png',
  },
];

export const FRAMES: Frame[] = [
  {
    id: 1,
    total: '1478 286',
    label: 'Pending Requests',
    icon: 'assets/images/wema-pending.png',
    bgClass: 'bg-[#eaedfa]',
    rate: '4.07%',
    state: '0',
  },
  {
    id: 2,
    total: '478 520',
    label: 'Approved Requests',
    icon: 'assets/images/wema-checkmark.png',
    bgClass: 'bg-[#fff9ed]',
    rate: '0.24%',
    state: '0',
  },
  {
    id: 3,
    total: '154 872',
    label: 'Total Agents',
    icon: 'assets/images/wema-store.png',
    bgClass: 'bg-[#efeafd]',
    rate: '1.64%',
    state: '1',
  },
  {
    id: 4,
    total: '167',
    label: 'Total Users',
    icon: 'assets/images/wema-persons.png',
    bgClass: 'bg-[#edfcf5]',
    rate: '0.00%',
    state: '2',
  },
];

export const ROOM_NUMBERS: string[] = ['Any', '1', '2', '3', '4', '5+'];
