import { TextField, SxProps, InputAdornment } from "@mui/material";
import clsx from "clsx";
import styles from './inputs.module.css';
import { ReactNode } from "react";

interface InputsProps {
  label: string;
  className?: string;
  sx?: SxProps;
  value: string;
  type?: string;
  endAdornment?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Inputs({ label, className, sx, value, type, endAdornment, onChange, onBlur}: InputsProps) {
  return (
    <div>
      <TextField
        id="departurePlace"
        label={label}
        variant="filled"
        value={value}
        type={type} 
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(styles.inputs, className)}
        sx={sx}
        InputProps={{
          endAdornment: endAdornment && (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ),
        }}
        
      />
    </div>
  );
}
