import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import { Hero, Features } from "./components/Sections";
import { Ideas, Contact, Footer } from "./components/ContactSections";

const Landing = () => {
  return (
    <div className="sw-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Ideas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

export default App;
