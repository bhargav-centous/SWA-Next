import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

// Styled InputLabel
const CustomInputLabel = styled('label')({
  // Add your custom styles here
  color: 'red',
  position: 'relative',
  // Other styles...
});

export default function RHFTextField({ name, placeholder, label, helperText, type, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={
            label
          }
          fullWidth
          placeholder={placeholder}
          type={type}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          variant='outlined'
          {...other}
        />
      )}
    />
  );
}

RHFTextField.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
