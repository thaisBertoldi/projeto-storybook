import { Input } from './TextInput';

export default {
  title: 'Form/TextInput',
  component: Input,
  parameters: {
    notes: 'Use this example to test the software keyboard related issues.',
  },
};

export const Basic = {
  play: (_context) => {
    console.log('play!!');
  },
  args: {
    placeholder: 'Type something',
  },
};