"use client";
import Button from "@mui/material/Button";
import TestClient from "../../api/https/test.js";
import clsx from "clsx";
import styles from './buttons.module.css';

interface ButtonsProps {
  label: string;
  className?: string;
}

export function Buttons({ label, className }: ButtonsProps) {
  return (
    <Button
      onClick={() => {
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
