import React, { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <MuiButton variant="contained">{children}</MuiButton>;
};
