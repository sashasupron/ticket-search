import React, { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import clsx from "clsx";
import styles from './autocomplete.module.css';

interface AutocompleteProps {
  label: string;
  className?: string;
}

interface Airport {
  city: string;
  country: string;
  id: string; 
}

export function Autocompletes({ label, className }: AutocompleteProps) {
  const [airports, setAirports] = useState<Airport[]>([]);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch('/airports.dat.txt'); 
        const data = await response.text();
        
        const airportList = data.split('\n').map((line, index) => {
          if (!line.trim()) return null; 
          
          const parts = line.split(',');
          if (parts.length < 4) return null; 
          
          return {
            city: parts[2].replace(/"/g, ''), 
            country: parts[3].replace(/"/g, ''), 
            id: `${parts[2]}-${parts[3]}-${index}`, 
          };
        }).filter((airport): airport is Airport => airport !== null); 

        const uniqueAirports = Array.from(new Map(airportList.map(airport => [`${airport.city}, ${airport.country}`, airport])).values());

        setAirports(uniqueAirports);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    fetchAirports();
  }, []);

  return (
    <div>
      <Autocomplete
        disablePortal
        options={airports}
        getOptionLabel={(option) => `${option.city}, ${option.country}`} // Форматируем вывод
        renderInput={(params) => (
          <TextField
            {...params}
            id="departurePlace"
            label={label}
            variant="filled"
            className={clsx(styles.autocompletes, className)}
            sx={{
              width: {
                xs: 290,
                sm: 220,
                md: 255,
                lg: 290,
                xl: 290,
              },
            }}
          />
        )}
        // Добавляем уникальный ключ для каждого элемента
        renderOption={(props, option) => (
          <li {...props} key={option.id}>{`${option.city}, ${option.country}`}</li>
        )}
      />
    </div>
  );
}
