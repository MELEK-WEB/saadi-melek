import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import AboutProject from "./pages/AboutProject";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <MainContent />
            </>
          }
        />
        <Route path="/Project/about/:id" element={<><Sidebar /><AboutProject/></>} />
      </Routes>
    </main>
  );
}

export default App;
