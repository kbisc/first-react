
import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home.js';
import Album from './component/Album.js';
import Gigs from './component/Gigs.js';


function App() {
  return (
    <BrowserRouter>
      <Home />
      <h1>hello</h1>
           <Routes>
                 <Route exact path='/' element={<Home />}></Route>
                 <Route exact path='/albums' element={< Album />}></Route>
                 <Route exact path='/upcoming' element={< Gigs />}></Route>
                 <Route exact path='/playlist' element={<div>Playlist page</div>}></Route>
                 <Route exact path='/merch' element={<div>Merch page</div>}></Route>
          </Routes>
          
       </BrowserRouter>
    
  );
}

export default App;
