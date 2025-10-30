import { createRoot } from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

//-- giving context to React app that we will have routing functionality inside our React project
//  Route is just like Endpoit of your site, simply saying route can be ,
// defined as path to some endpoint of our site url or Route is route of your pages in site

// example.com/blog/1234 -- this trailing slash part of our url is route/roote which leads us to some page in site. it could be anything like name
//  or whatever we will see soon
// Act as a Context provider (Context- routing) for its Children

function App() {
  return (
    <BrowserRouter>
    {/* Link help us setup links to navigate to/and between the pages and they also keeps/maintain all the states
    // Like if we simply go to anchor <a> tags they will go to another page and will paint new site page and all our internal states will be refreshed and gone,
    // that's where Link comes handy, it serves both purpose 
    */}
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
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
