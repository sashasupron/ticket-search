import { TextField } from "@mui/material";
import clsx from "clsx";
import styles from './inputs.module.css';

interface InputsProps {
  label: string;
  className?: string;
}

export function Inputs({ label, className }: InputsProps) {
  return (
    <div>
      <TextField
        id="departurePlace"
        label={label}
        variant="filled"


        className={clsx(styles.inputs, className)}
      />
    </div>
  );
}

