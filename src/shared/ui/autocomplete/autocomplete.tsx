"use client";
import { bookingResources } from "@/shared/api";
import { AirportResponse } from "@/shared/types";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import styles from "./autocomplete.module.css";


interface AutocompleteProps {
  label: string;
  className?: string;
  onChange: (newValue: AirportResponse | null) => void;
}

export function Autocompletes({
  label,
  className,
  onChange,
}: AutocompleteProps) {
  const airportsQuery = useQuery({
    queryKey: ["airports"],
    queryFn: () => bookingResources.getAirports({}),
  });

  const handleChange = (newValue: AirportResponse | null) => {
    onChange(newValue ? newValue : null);
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        options={(airportsQuery.data || []).filter(
          (v) => v.airportIata !== null
        )}
        getOptionLabel={(option) => {
          return `${option.airportCity}, ${option.airportCountry.fullCountryName}`;
        }}
        onChange={(event, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="filled"
            className={clsx(styles.autocompletes, className)}
            sx={{ width: { xs: 327, sm: 220, md: 255, lg: 290, xl: 290,},}}
          />
        )}
        
        renderOption={(props, option) => (
          <li {...props} key={`${option.airportId}`}>
            {`${option.airportCity}, ${option.airportCountry.fullCountryName}`}
          </li>
        )}
      />
    </div>
  );
}
