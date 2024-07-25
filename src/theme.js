import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA580C",
    },
  },
  typography: {
    color: "#000000",
    fontFamily: ["Roboto", "Inter", "sans-serif"].join(","),

    // Custom typography variant
    banner_heading: {
      fontWeight: 700,
      fontSize: "2.25rem",
      color: "#000000",
      lineHeight: 1.2,
      textAlign: "center",
      
    },
  },
});

export default theme;
