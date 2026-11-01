import { useState } from 'react'
import Navbar from "./Components/Navbar"
import Home from "./pages/Home";
import { Route , Routes} from 'react-router-dom';
import NotFound from './pages/Notfound';
import RecipeDetail from './pages/RecipeDetail';



function App() {

  return (

   <div  className="min-h-screen bg-background text-text font-sans">
    <Navbar/>
     <Routes>
      
        <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
          
    </Routes>
    </div>  
  ) 
}

export default App
