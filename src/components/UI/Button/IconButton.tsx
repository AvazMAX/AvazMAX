import React, { ReactNode } from 'react';
import { IconButton as MuiIconButton } from '@mui/material';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: string;
}

export const CustomIconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
  ...restProps
}) => {
  return (
    <MuiIconButton disabled={disabled} onClick={onClick} {...restProps}>
      {children}
    </MuiIconButton>
  );
};
