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
  createTask('Need to remember to add a new task...'),
];

export { taskExamples as default, createTask };