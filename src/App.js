import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './components/Navbar/aboutus';
import CookBook from './components/Navbar/cookbook';
import Home from './components/Navbar/home';

function App() {
   return (
    <><Router>
           <div>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/aboutus" element={<AboutUs />} />
                   <Route path="/CookBook" element={<CookBook />} />
               </Routes>
           </div>
       </Router></>
   );
};

export default App;