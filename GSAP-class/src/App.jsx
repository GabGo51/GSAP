import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import "./App.css";
import Home from "./components/Home";
import About from './components/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
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
