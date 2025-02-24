import { SxProps, TextField } from "@mui/material";
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import styles from "./inputs.module.css";

interface InputsProps {
  label: string;
  className?: string;
  sx?: SxProps;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (state: string) => void;
  required?: boolean;
}

export function Inputs({
  label,
  className,
  sx,
  type = "text",

  required,
  value,
  onChange = () => {},
}: InputsProps) {
  return (
    <div>
      <TextField
        id="departurePlace"
        label={label}
        variant="filled"
        required={required}
        value={value || ""}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(styles.inputs, className)}
        sx={sx}
      />
    </div>
  );
}
