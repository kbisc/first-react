import react from "react";

//import img from "./image/logo.png"
//import upc from "./image/upcoming.png"

function Gigs(){
return(
<>

<div class="logo">
        <img class="lg" src="./image/logo.png"/>
    </div>
    
    <h2>UPCOMING TOUR</h2>

        
    <div class="middle">
        
        <img class="photo" src="./image/upcoming.png"/>
            
    <div class="contain">
        <h3>NEPAL MUSIC FESTIVAL</h3>
        <p class="pa">Melbourne,Sydney,Perth Canberra</p>
        <p class="pe">Performers:Monkey temple, Trishala Gurung & Apurva Tamang</p>
        <a class="book" href="">BOOK TICKETS</a>
    </div>
    </div>
</>
);
}

export default Gigs;