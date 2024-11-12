"use client";
import Button from "@mui/material/Button";
// import TestClient from "@/shared/api/https/test.js";
import clsx from "clsx";
import styles from './buttons.module.css';
import { SxProps } from "@mui/material";

interface ButtonsProps {
  label: string;
  className?: string;
  onClick?: () => void;
  sx?: SxProps;
}

export function Buttons({ label, className, onClick, sx }: ButtonsProps) {
  return (
    <Button
      sx={sx}

      
      onClick={() => {
        if (onClick) { 
          onClick(); 
        }

        // TestClient.sendGet().then((res) => {
        //   alert(res.data);
        // });
      }}

      variant="outlined"

      className={clsx(styles.customButton, className)}

    >
     {label}
    </Button>
  );
}
