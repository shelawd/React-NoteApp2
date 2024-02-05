import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page";
import HomePage from "./pages/home-page";
import AddNotePage from "./pages/add-note-page";
import Details from "./pages/detail";
import ArchivedNotes from "./components/archived-notes";
import Archived from "./pages/archived";
import NotFound from "./pages/not-found";
import RegisterPage from "./pages/register-page";
import LoginPage from "./pages/login-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/add-note" element={<AddNotePage />} />
      <Route path="/note/:id" element={<Details />} />
      <Route path="/archived" element={<Archived />} />
      <Route path="/archived-notes" element={<ArchivedNotes />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/register" element={<RegisterPage /> } />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
