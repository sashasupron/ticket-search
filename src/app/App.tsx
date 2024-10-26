import "@/app/styles/index.css";
import SearchPage from "@/pages/searchPage/ui/searchPage"; // Убедитесь, что путь правильный
import RootLayout from "@/app/layout";

function App() {
  return (
    <RootLayout>
      <SearchPage />
    </RootLayout>
  );
}

export default App;
