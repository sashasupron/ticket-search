"use client";
import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import clsx from "clsx";
import dayjs from "dayjs";
import styles from "./datePicker.module.css";

interface DatePickerProps {
  label: string;
  className?: string;
  sx?: SxProps;
  onChange(value: string): void;
}

export function DatePickers({
  label,
  className,
  sx,
  onChange = () => {},
}: DatePickerProps) {
  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={clsx(styles.datePicker, className)}
        label={label}
        onChange={(e) => onChange(e?.format("YYYY-MM-DD") || "")}
        minDate={today}
        format="DD-MM-YYYY"
        sx={sx}
      />
    </LocalizationProvider>
  );
}
