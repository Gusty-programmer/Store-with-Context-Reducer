import React, {useContext} from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';
import Context from "../../context/state/Context";


function Card(props) {

    const { addItemsCos } = useContext(Context)

    function itemP(ky) {
        let countnr = new Object()
        countnr[ky] = 1
        return countnr
    }

    

    return (<div className={classes.card}>
        <Link to={`/${props.id}`}>
        <div className={classes.image}>
            <img src={props.image} alt={props.name} />
            {props.promo > 0 &&
                <div className={classes.promo}><span>{props.promo}%</span></div>
            }
            </div>
        <div>
            <h3>{props.name}</h3>
            </div></Link>
            <div>
                <p>{props.scara}</p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        {props.promo === 0 ?
            <div>
                <h4>{(props.pret).toFixed(2)} Lei</h4>
            </div> : 
            <div className={classes.pret_promo}>
            <h4><s>{props.pret}</s> <span>{[(props.pret - (props.pret / 100 * props.promo)).toFixed(2)]} Lei</span></h4>
        </div>
            }
            <div className={classes.btn}>
            {props.stoc !== 0 ? <button onClick={() => addItemsCos(props.id, itemP("item"+props.id))}>Adauga in cos</button> :
                <p ><span>Out of stoc</span></p>}          
            </div>   
    </div>)
}

export default Card;