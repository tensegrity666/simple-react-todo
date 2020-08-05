import { nanoid } from 'nanoid';

const createTask = (label) => {
  return {
    label,
    id: nanoid(),
    important: false,
    done: false,
    printDate: new Date().toLocaleDateString(),
  }
}

const taskExamples = [
  createTask('eat'),
  createTask('drink'),
  createTask('sleep'),
  createTask('work'),
  createTask('eat'),
  createTask('eat'),
];


export { taskExamples as default, createTask };