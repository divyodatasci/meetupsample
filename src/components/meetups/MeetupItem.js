import { useContext } from 'react';

import Card from '../ui/Card'
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {

    const favoritesCtx = useContext(FavoritesContext);
    const ItemIsFavorite = favoritesCtx.ItemIsFavorite(props.id);

    function toggleFavoritesStatusHandler() {
        if(ItemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }
    return(
        <Card>
            <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.addresss}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>{ItemIsFavorite?'Remove from Favorites':'To Favourites'}</button>
            </div>
        </li>
        </Card>
        
    );
}

export default MeetupItem;
