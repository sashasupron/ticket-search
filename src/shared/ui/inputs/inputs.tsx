import { TextField, SxProps } from "@mui/material";
import clsx from "clsx";
import styles from './inputs.module.css';

interface InputsProps {
  label: string;
  className?: string;
  sx?: SxProps;
}

export function Inputs({ label, className, sx }: InputsProps) {
  return (
    <div>
      <TextField
        id="departurePlace"
        label={label}
        variant="filled"


        className={clsx(styles.inputs, className)}
        sx={sx}
        
      />
    </div>
  );
}

