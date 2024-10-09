import { Typography } from "@mui/material"; 



interface TextProps {
  label: string;
}


function Description({ label }: TextProps) {
  return (
    <div className="description-container">
      <Typography
        style={{
          color: "rgba(255, 255, 255, 1)",
          fontFamily: "Roboto",
          fontWeight: "100",
          fontSize: "40px",
          textAlign: "left",
          marginBottom: "40px",
        }}
      >
        {label}
      </Typography>
    </div>
  );
}

export default Description;
