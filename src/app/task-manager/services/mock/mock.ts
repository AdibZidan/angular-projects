import { Task } from '../../interface/Task';

export const tasksMock: Task[] = [{
  id: 1,
  title: 'This is a test!',
  description: 'I love testing!',
  percentage: 69,
  completed: false
},
{
  id: 2,
  title: 'Wake up at 6 A.M',
  description: 'Drink lots water and prepare coffee',
  percentage: 10,
  completed: false
}, {
  id: 3,
  title: 'This is a another test!',
  description: 'I love testing! --- This message was marked as spam!',
  percentage: 100,
  completed: true
}];

export const taskMock: Task = tasksMock[0];
