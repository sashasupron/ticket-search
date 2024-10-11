"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import clsx from "clsx";
import styles from './datePicker.module.css';

interface DatePickerProps {
  label: string;
  className?: string;
}

export default function DatePick({ label, className }: DatePickerProps) {
  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
       className={clsx(styles.datePicker, className)}
        label={label}

        minDate={today}
        format="DD/MM/YYYY"
      />
      
    </LocalizationProvider>
  );
}
