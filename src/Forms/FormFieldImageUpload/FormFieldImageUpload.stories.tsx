import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import ImageUpload from './FormFieldImageUpload';
import Field from '@root/components/Field';

export default {
  title: 'Forms|ImageUpload',
  decorators: [withKnobs],
};

export const Example = (): ReactElement => {
  const disabled = boolean('Disabled', false);

  return (
    <Field
      label={text('Label', 'Label')}
      error={boolean('Error', false)}
      errorText={text('Error text', '')}
      required={boolean('Required', false)}
      disabled={disabled}
      instructionText={text('Instruction text', 'Instruction text')}
      helperText={text('Helper text', 'Helper text')}
      type='ImageUpload'
    >
      <ImageUpload disabled={disabled} />
    </Field>
  );
};
