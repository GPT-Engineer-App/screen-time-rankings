import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, LogIn } from "lucide-react";
import Leaderboard from "./pages/Leaderboard.jsx"; // Import the new Leaderboard page
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx"; // Import the new Login page
import { useState } from "react";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Leaderboard", // Add Leaderboard to the navigation items
    to: "/leaderboard",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Login", // Add Login to the navigation items
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
  },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}>
              <Route index element={<Index />} />
              <Route path="leaderboard" element={<Leaderboard />} /> {/* Add the Leaderboard route */}
              <Route path="login" element={<Login onLogin={handleLogin} />} /> {/* Add the Login route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;