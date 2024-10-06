import { TextField } from "@mui/material";

function InputDeparture() {
  return (
    <div>
      <TextField
        id="departurePlace"
        label="Where from?"
        variant="filled"
        sx={{
          background: "white",
          borderRadius: 1,
          width: 270,
        }}
      />
    </div>
  );
}

export default InputDeparture;
