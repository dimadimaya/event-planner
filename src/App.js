import { Route, Routes } from "react-router-dom";
import { CreateEvent } from "./pages/CreateEvent/CreateEvent";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { Event } from "./pages/Event/Event";
import { EditEvent } from "./pages/EditEvent/EditEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/edit/:eventId" element={<EditEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
