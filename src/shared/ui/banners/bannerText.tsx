import { Typography } from "@mui/material"; 



interface TextProps {
  label: string;
  sx?: React.CSSProperties;
}


function Description({ label, sx }: TextProps) {
  return (
    <div className="description-container" style={sx} >
      <Typography
       sx={{
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Roboto",
        fontWeight: "100",
        fontSize: {
          xs: 20,
          sm: 21,
          md: 28,
          lg: 33,
          xl: 43,
        },
        marginBottom: "40px",
        position: "absolute",

        left: "50%",

        transform: "translateX(-50%)", 
        zIndex: 1,

        textAlign: "center",
      }}
      >
        {label}
      </Typography>
    </div>
  );
}

export default Description;
