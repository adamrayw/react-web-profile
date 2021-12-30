// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="Apps">
      <nav>
        <li>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </li>
      </nav>
      <header className="App-header">
        <Routes>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
