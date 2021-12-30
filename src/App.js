// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="app">
      <div className="brand">Website que</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/profile" className="nav-item">
          Profile
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/blog" className="nav-item">
          Blog
        </Link>
      </nav>
      <header className="App-header">
        <Routes>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
