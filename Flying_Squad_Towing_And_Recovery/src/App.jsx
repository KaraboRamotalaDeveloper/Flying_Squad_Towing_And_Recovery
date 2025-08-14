import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
