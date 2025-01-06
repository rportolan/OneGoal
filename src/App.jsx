import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./templates/Header";
import Navbar from "./templates/Navbar";
import MyGoals from "./pages/MyGoals";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Analytics from "./pages/Analytics";
import NewGoal from "./pages/NewGoal";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Header et Navbar sont constants */}
        <Header />
        <div className="flex flex-grow mb-2">
          <Navbar />
          {/* Contenu principal qui change selon la route */}
          <main className="h-full w-full mb-2 mr-4 rounded-xl bg-primary flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mygoals" element={<MyGoals />} />
              <Route path="/newgoals" element={<NewGoal />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Dashboard />} /> {/* Route par défaut */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
