import { nanoid } from 'nanoid';

const buttonsData = [
  { name: 'all', label: 'All', id: nanoid() },
  { name: 'active', label: 'Active', id: nanoid() },
  { name: 'done', label: 'Done', id: nanoid() },
];

export default buttonsData;
