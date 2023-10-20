import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  children: string;
  variant?: 'contained' | 'outlined' | 'text';
  type?: 'submit' | 'button';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  variant = 'contained'
}) => {
  return (
    <MuiButton type={type} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
