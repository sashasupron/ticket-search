"use client";
import Button from "@mui/material/Button";
import TestClient from "../response/test.js";
import clsx from "clsx";
import styles from './buttons.module.css';

interface ButtonsProps {
  label: string;
  className?: string;
}

export default function Buttons({ label, className }: ButtonsProps) {
  return (
    <Button
      onClick={() => {
        TestClient.sendGet().then((res) => {
          alert(res.data);
        });
      }}

      variant="outlined"

      className={clsx(styles.customButton, className)}

      sx={{
        background: "rgba(250, 149, 44, 0.5)",
        borderRadius: 1,
        color: "white",
        textTransform: "capitalize",
        borderColor: "rgba(250, 149, 44, 0)",

        "&:hover": {
          background: "rgba(250, 149, 44, 0.3)",
          borderColor: "rgba(250, 149, 44, 0)",
        },
      }}
    >
     {label}
    </Button>
  );
}
