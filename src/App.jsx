import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/DashBoard';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AddNewRecipe from './pages/AddNewRecipe';
import AllRecipes from './pages/AllRecipes';

////// >>>>>>> COPY <<<<<<<< //////////

function App() {


  return (
    <main>

      <Navbar />

      <Sidebar/>

      <Routes>
        
        {/* Route for Home Page */}
        <Route path="/" element= {<Dashboard/>}/>

        {/* Route for Recipes Page */}
        <Route path="/about" element= {<About/>} />

        {/* Route for Add New Recipe Page */}
        <Route path="/AddNewRecipe" element= {<AddNewRecipe/>} />

        {/* Route for All Recipes Page */}
        <Route path="/AllRecipes" element= {<AllRecipes/>}  />
        
        {/* Route for Error Page */}
        <Route path="*" element= {<NotFound/>} />

      </Routes>

      <Footer />

    </main>
  )
}

export default App
