import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";
import style from "./Nav.module.css"


const Nav = ({onSearch}) => {
    return (

        <nav className={style.buttons} >
            <SearchBar onSearch= {onSearch} />
            <button  >
                <Link to="/about" className={style.botonsub}>About</Link>
            </button>

            <button>
                <Link to="/home" className={style.botonsub}>Home</Link>
            </button>

            <button>
                <Link to="/favorites" className={style.botonsub}>Favorites</Link>
            </button>
        </nav>
    )
}

export default Nav;