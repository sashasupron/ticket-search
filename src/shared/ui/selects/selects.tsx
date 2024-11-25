"use client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import clsx from "clsx"; 
import styles from "./selects.module.css"; 
import { SxProps } from "@mui/material";

interface SelectProps {
  label: string; // Метка для поля выбора
  className?: string; // Пользовательский класс стилей
  menuItems: { value: string; label: string }[]; // Список опций
  sx?: SxProps; // Стили для компонента
  value: string; // Текущее значение
  onChange: (value: string) => void; // Обработчик изменений
}

export function Selects({ label, className, menuItems, sx, value, onChange }: SelectProps) {
  const handleClassChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string); // Уведомляем родительский компонент
  };

  return (
    <div>
      <FormControl 
        variant="filled" 
        className={clsx(styles.customSelect, className)}
        sx={sx}
      >
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
        
        <Select
          labelId="demo-simple-select-filled-label"
          id="classType"
          value={value} // Используем значение из пропсов
          onChange={handleClassChange}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
