import { useContext } from "react";
import { Link } from "react-router-dom";

// import classes from './MainNavigation.modal.css'
import styles from './MainNavigation.module.css'
import FavoritesContext from "../../store/favorites-context";
function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    return(
        <header className={styles.header}>
            <div>React Meet Up</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meet Ups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>New Meet Ups</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>Favourites<span className={styles.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default MainNavigation