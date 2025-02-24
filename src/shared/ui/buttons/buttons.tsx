"use client";
import Button from "@mui/material/Button";
// import TestClient from "@/shared/api/https/test.js";
import { SxProps } from "@mui/material";
import clsx from "clsx";
import styles from "./buttons.module.css";

interface ButtonsProps {
  label: string;
  className?: string;
  onClick?: () => void;
  sx?: SxProps;
  disabled?: boolean;
}

export function Buttons({
  label,
  className,
  onClick,
  sx,
  disabled = false,
}: ButtonsProps) {
  return (
    <Button
      sx={sx}
      disabled={disabled}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      variant="outlined"
      className={clsx(styles.customButton, className)}
    >
      {label}
    </Button>
  );
}
