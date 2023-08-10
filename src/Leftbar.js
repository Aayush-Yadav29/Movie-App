import './Leftbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faSearch, faTv, faVolleyball } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Leftbar = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <div className="Leftbar">
            <div className="logo">
                <img src='https://yt3.googleusercontent.com/ytc/AOPolaTCCpFIry8HKv8PLZfuE6JiBc995ruWT3YQYcyQ7A=s900-c-k-c0x00ffffff-no-rj' alt=''></img>    
            </div>
            {/* {isAuthenticated ? (
                <div>  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button></div>
            ):(
                <div> <button onClick={() => loginWithRedirect()}>Log In</button></div>

            )} */}
            <div className="navbar">
                {/* <div className="icons myspace">
                <FontAwesomeIcon icon={faUser} />
                <span className="text">My Space</span>
                </div> */}
                <div className="icons search">
                <FontAwesomeIcon icon={faSearch} />
                <Link to = "/Search"  className="noDecoration"> 
                <span className="text noDecoration">Search</span>
                </Link>
                </div>
                <div className="icons home">
                <FontAwesomeIcon icon={faHouse} />
                <Link to = "/MainPanel"  className="noDecoration"> 
                <span className="text noDecoration">Home</span>
                </Link>
                </div>
                <div className="icons tv">
                <FontAwesomeIcon icon={faTv} />
                <Link to = "/Tv"  className="noDecoration"> 
                <span className="text noDecoration">Tv</span>
                </Link>
                </div>
                <div className="icons movies">
                <FontAwesomeIcon icon={faFilm} />
                <span className="text">Movies</span>
                </div>
                <div className="icons sports">
                <FontAwesomeIcon icon={faVolleyball} />
                <Link to = "/Sports"  className="noDecoration"> 
                <span className="text noDecoration">Sports</span>
                </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Leftbar;