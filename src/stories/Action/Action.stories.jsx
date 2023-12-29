import { ActionButton } from './Actions';

const ActionButtonMeta = {
  title: 'Form/ActionButton',
  component: ActionButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Press me!',
  },
};
export default ActionButtonMeta;


export const Basic = {};

export const AnotherAction = {
  argTypes: {
    onPress: { action: 'pressed a different button' },
  },
};