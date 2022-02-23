import { Ticket } from '../models/ticket';
import { STUDENT_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: STUDENT_MOCKED[0],
    major: 'SI',
    archived : false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENT_MOCKED[0],
    major: 'GE',
    archived : false
  },
{
  title: 'SI5 in Tourcoing',
  description: 'Description du voyage',
  date: dateToday,
  student: STUDENT_MOCKED[1],
  major: 'SI',
  archived : true
},
];
