import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import FormFieldRadioGroup from './FormFieldRadioButtonGroup';

afterEach(cleanup);

const options = [
  {
    label: 'Label 1',
    value: 'label_1',
  },
  {
    label: 'Label 2',
    value: 'label_2',
  },
  {
    label: 'Label 3',
    value: 'label_3',
  },
];

describe('The FormFieldRadioGroup behavior', () => {
  it('should check the clicked option', () => {
    const FormFieldRadioGroupExample = () => {
      const [value, setValue] = useState('');

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };

      return (
        <>
          <span>{value}</span>
          <FormFieldRadioGroup
            label='Label'
            error={false}
            instructionText='Instruction text'
            errorText='Error text'
            options={options}
            onChange={handleChange}
            value={value}
          />
        </>
      );
    };

    render(<FormFieldRadioGroupExample />);
    const radioButtons = screen.getAllByRole('radio') as HTMLInputElement[];
    fireEvent.click(radioButtons[1]);
    const value = screen.getByText('label_2');

    expect(value).toBeDefined();
    expect(radioButtons[0].checked).toEqual(false);
    expect(radioButtons[1].checked).toEqual(true);
    expect(radioButtons[2].checked).toEqual(false);
  });

  it('should display the error text, instruction text and label', () => {
    render(
      <FormFieldRadioGroup
        label='Label'
        error={true}
        instructionText='Instruction text'
        errorText='Error text'
        options={options}
        required={true}
      />
    );

    const instructionText = screen.getByText('Instruction text');
    const errorText = screen.getByText('Error text');
    const label = screen.getByText('Label');

    expect(instructionText).toBeDefined();
    expect(errorText).toBeDefined();
    expect(label).toBeDefined();
  });

  it('should not display the error text since there is no error and field is not required', () => {
    render(
      <FormFieldRadioGroup
        label='Label'
        error={false}
        errorText='Error text'
        options={options}
        required={false}
      />
    );

    const errorText = screen.queryByText('Error text');

    expect(errorText).toBe(null);
  });
});
