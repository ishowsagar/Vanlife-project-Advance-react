import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* -- at this path, it will render this component */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/vans" element={<Vans />} />

          <Route path="/host" element={<Dashboard />}>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// App is rendering each route inside and we explicitly created each route with function by returning some jsx.
createRoot(document.getElementById("root")).render(<App />);
