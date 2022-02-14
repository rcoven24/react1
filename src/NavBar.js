import react from "react";
import { Link} from "react-router-dom";

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/light">Go Light</Link>
            </li>
        </ul>

    );
}

export default NavBar;