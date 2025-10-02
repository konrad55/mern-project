import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContextProvider } from "./shared/context/auth-context";
import type { AuthContextType } from "./types";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const authContextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContextProvider value={authContextValue}>
      <Router>
        <MainNavigation />
        <main className="mt-20">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            {isLoggedIn && (
              <>
                <Route path="/places/new" element={<NewPlace />} />
                <Route path="/places/:placeId" element={<UpdatePlace />} />
              </>
            )}
            {!isLoggedIn && <Route path="/auth" element={<Auth />} />}
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/" : "/auth"} replace />}
            />
          </Routes>
        </main>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
