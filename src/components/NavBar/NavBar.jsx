import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom";

var homeicon="https://www.iconpacks.net/icons/1/free-home-icon-189-thumb.png";
var editicon="data:image/png;base64,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";
var seeicon="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png";
var gearicon="https://icons-for-free.com/iconfiles/png/512/gear-131965017453293218.png"
class NavBar extends React.Component{

    
    render(){
        return(
        <nav>
            <ul>
                <li> 
                    <Link to="/home"><img src={homeicon} alt="home"></img></Link>                
                </li>
                <li> 
                    <Link to ="/edit"><img src={editicon} alt="edit"></img></Link>                
                </li>
                <li>  
                    <Link to="/see"><img src={seeicon} alt="see"></img></Link>              
                </li>
                <li>
                    <Link to="/config"><img src={gearicon} alt="config"></img></Link>
                </li>
            </ul>
        </nav>          
        );
    }
}
export default NavBar;
