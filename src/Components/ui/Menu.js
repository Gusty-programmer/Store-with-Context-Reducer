import React, {useContext} from 'react';
import classes from './Menu.module.css';
import { memo } from "react";
import Context from '../../context/state/Context';

function Menu(props) {
    const {changeMenu} = useContext(Context)
    return (
       < div>
        <li className={classes.li} >
            <div>
                <h4 onClick={() => changeMenu(props.categ)}> {props.categ} </h4>              
            </div>
        </li>
            </div>
    );
}

export default memo(Menu);