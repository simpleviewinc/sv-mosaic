import * as React  from 'react';
import { TextFieldProps } from './TextFieldTypes';

import { StyledWrapper, StyledTextField, StyledIcon } from './TextField.styled';


const TextField: React.FC<TextFieldProps & React.HTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const {
    leadingIcon,
    size = "md",
    className,
    disabled = false,
    error = false,
    value,
    onChange,
    placeholder,
    width = "100%",
    readonly = false,
    clearable = false,
    ...rest
  } = props;

  const styles = {
    innerSize: size,
    disabled: disabled,
    error,
    width,
    withIcon: leadingIcon !== undefined,
  };

  return (
    <StyledWrapper width={width} innerSize={size}>
      <StyledTextField
        type={rest.type || "text"}
        value={value}
        onChange={onChange}
        readOnly={readonly}
        className={className}
        placeholder={placeholder}
        {...styles}
        {...rest}
      />
      <StyledIcon as={leadingIcon} innerSize={size} />
    </StyledWrapper>
  );
};

export default TextField;
