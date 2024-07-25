import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import Home from "./app/home";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
