import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import "./App.css";
import Home from "./components/Home";
import About from './components/About';
import Cubes from './components/Cubes';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cube' element={<Cubes/>}/>
    </>
    
  )
)

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
