import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import MainPage from "./main-page/main_page";
import Tekst from "./main-page/temp";
import NavBar from "./navigation/navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <MainPage />
      <Tekst />
    </ThemeProvider>
  );
}

export default App;
