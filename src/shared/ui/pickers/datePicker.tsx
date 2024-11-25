import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SxProps } from '@mui/material';
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";
import styles from './datePicker.module.css';

interface DatePickerProps {
  label: string;
  className?: string;
  sx?: SxProps;
  value: Dayjs | null; 
  onChange: (date: Dayjs | null) => void;
}



export function DatePickers({ label, className, sx, value, onChange }: DatePickerProps) {
  const today = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
       className={clsx(styles.datePicker, className)}
        label={label}
        value={value} 
        onChange={onChange}
        minDate={today}
        format="DD/MM/YYYY"
        sx={sx}
      />
    </LocalizationProvider>
  );
}