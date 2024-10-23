import "@/app/styles/index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchPage } from "@/pages/searchPage/ui/searchPage";
import { TicketPage } from "@/pages/ticketPage/ticketPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
