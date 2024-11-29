import { TextField, SxProps } from "@mui/material";
import clsx from "clsx";
import styles from './inputs.module.css';

interface InputsProps {
  label: string;
  className?: string;
  sx?: SxProps;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Inputs({ label, className, sx, value, onChange, onBlur}: InputsProps) {
  return (
    <div>
      <TextField
        id="departurePlace"
        label={label}
        variant="filled"
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(styles.inputs, className)}
        sx={sx}
        
      />
    </div>
  );
}
