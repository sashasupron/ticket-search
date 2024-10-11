import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import MainPage from "./mainPage/mainPage";
import NavBar from "./navigation/navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
