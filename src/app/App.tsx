import "@/app/styles/index.css";
import SearchPage from "@/pages/searchPage/ui/searchPage"; 
import TicketPage from "@/pages/ticketPage/ui/ticketPage"; 
import RootLayout from "@/app/layout";

function App() {
  return (
    <RootLayout>
      <SearchPage />
      <TicketPage />
    </RootLayout>
  );
}

export default App;
