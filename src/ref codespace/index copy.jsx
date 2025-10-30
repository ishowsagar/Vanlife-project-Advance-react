import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  //-- each route
  return <h1>Welcome! to our home page!</h1>;
}

function About() {
  return (
    <section>
      <h1>Welcome! to the About page!</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Discover</li>
        <li>Blog</li>
        <li>Help</li>
      </ul>
    </section>
  );
}

// App is rendering each route inside and we explicitly created each route with function by returning some jsx.
createRoot(document.getElementById("root")).render(<App />);
