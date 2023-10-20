import React, { forwardRef } from 'react';
import { TextField, styled } from '@mui/material';

interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  type: string;
  placeholder?: string;
}
const InputStyled = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    height: '45px'
  },
  '& .MuiOutlinedInput-root.Mui-focused fieldset': {
    border: `1px solid #048741CC`
  },
  '& .MuiOutlinedInput-root:hover fieldset': {
    border: `1px solid ${theme.palette.grey[500]}`
  }
}));

export const Input: React.FC<InputProps> = forwardRef(
  ({ value, onChange, type, placeholder, error }, ref) => {
    return (
      <InputStyled
        placeholder={placeholder}
        variant="outlined"
        inputRef={ref}
        value={value}
        type={type}
        onChange={onChange}
        error={error}
      />
    );
  }
);
