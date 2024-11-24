import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import clsx from "clsx";
import styles from "./selects.module.css";

interface SelectProps {
  label: string;
  className?: string;
  menuItems: { value: string; label: string }[];
  onChange?: (value: string) => void;
  value?: string;
}

export function Selects({ label, className, menuItems, onChange, value }: SelectProps) {
  const [isError, setIsError] = useState(false);

 
  const handleClassChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setIsError(value === "");
    if (onChange) {
      onChange(value);
    }
  };

  const handleBlur = () => {
    setIsError(value === "");
  };

  return (
    <FormControl
      variant="filled"
      className={clsx(styles.customSelect, className)}
      sx={{ width: "100%" }}
      error={isError}
    >
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="classType"
        value={value}
        onChange={handleClassChange} 
        onBlur={handleBlur}
        sx={{
          width: {
            xs: 290,
            sm: 120,
            md: 150,
            lg: 180,
            xl: 180,
          },
          background: "white",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
