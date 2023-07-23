import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Business from "./pages/Business";
import Home from "./pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Sports from "./pages/Sports";
import Tech from "./pages/Tech";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddBlog from "./pages/AddBlog";
import BlogState from "./context/blog/BlogState";
import PageNotFound from "./pages/404";
import Blog from "./pages/Blog";
import { Footer } from "./components/containers/Footer";

function App() {
  return (
    <>
      <div>
        <BlogState>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/tech" element={<Tech />}></Route>
              <Route path="/business" element={<Business />}></Route>
              <Route path="/sports" element={<Sports />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/create" element={<AddBlog />}></Route>
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </BlogState>
      </div>
    </>
  );
}

export default App;
