"use client";
import Button from "@mui/material/Button";
import TestClient from "@/shared/api/https/test.js";
import clsx from "clsx";
import styles from './buttons.module.css';

interface ButtonsProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export function Buttons({ label, className, onClick }: ButtonsProps) {
  return (
    <Button
      sx={{width: {
        xs: 290,
        sm: 150,
        md: 150,
        lg: 150,
        xl: 150,
      },
      }}

      
      onClick={() => {
        if (onClick) { 
          onClick(); 
        }

        TestClient.sendGet().then((res) => {
          alert(res.data);
        });
      }}

      variant="outlined"

      className={clsx(styles.customButton, className)}

    >
     {label}
    </Button>
  );
}
