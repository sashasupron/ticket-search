"use client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import clsx from "clsx"; 
import styles from "./selects.module.css"; 

interface SelectProps {
  label: string;
  className?: string;
  menuItems: { value: string; label: string }[]; 
}

export function Selects({ label, className, menuItems}: SelectProps) {
  const [classType, setClassType] = useState("");

  const handleClassChange = (event: SelectChangeEvent) => {
    setClassType(event.target.value as string);
  };

  return (
    <div>
      <FormControl 
        variant="filled" 
        className={clsx(styles.customSelect, className)}
        sx={{ width: '100%' }}
        >
          
        <InputLabel id="demo-simple-select-filled-label"> {label} </InputLabel>

        <Select
          labelId="demo-simple-select-filled-label"
          id="classType"
          value={classType}
          onChange={handleClassChange}

          sx={{width: {
            xs: 290,
            sm: 120,
            md: 150,
            lg: 180,
            xl: 180,
          },
        }}
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
