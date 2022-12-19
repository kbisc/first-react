import react from "react";
import { Link } from "react-router-dom";



 function Home() {
  return (
    <>
    <div class="wrapper">
            <h1>hello</h1>
            <div className='logo'>
                <img className="lg" src="./image/logo.png" alt=""/>
            </div>
            
            <div>
               
                <img className='e1'  src="./image/Ellipse 1.png" alt=""/>
                <img className="e2" src="./image/Ellipse 2.png" alt=""/>
                <img className="e3" src="./image/Ellipse 3.png" alt=""/> 
            </div>
            
            <ul>
                <li><Link className="home" to="/">HOME</Link></li>
                <li><Link className="albums" to="/Album">ALBUMS</Link></li>
                <li><Link className="gigs" to="/Upcoming">GIGS</Link></li>
                <li><a className="playlist" href="#">PLAYLIST</a></li>
                <li><img className="line" src="./image/Line 1.png" alt=""/></li>
                <li><a className="merch" href="#">MERCH</a></li>
            </ul>
            <div className="main">
            <img className="image1" src='./image/bimg.png' alt=""/>
    
            
                <div className="container">
                    <p>ROLL THE ROCKING MUSIC</p>
                    <h1>MONKEY TEMPLE</h1>
                    <a className="enter" href="#">ENTER</a>
                    
                </div>
            
        </div>
    
            );
    </div>
    </>
  );
}

export default Home;
