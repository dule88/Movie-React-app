import './App.css';
import { Routes, Route } from 'react-router-dom';


import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <>  
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route path= '/' element= {<Home/>}></Route>
                <Route path= '/cart' element= {<Cart/>}></Route>
                <Route path= '/*' element= {<NotFound/>}></Route> 
            </Routes>
            <Footer/>
        </div>
    </>
  )
}

export default App;