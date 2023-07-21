import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Bussiness from './pages/Bussiness';
import Home from './pages/Home';
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Sports from './pages/Sports';
import Tech from './pages/Tech';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/tech' element={<Tech/>}></Route>
      <Route path='/bussiness' element={<Bussiness/>}></Route>
      <Route path='/sports' element={<Sports/>}></Route>
      <Route path='/create' element={<AddBlog/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
