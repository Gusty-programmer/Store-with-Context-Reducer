import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/state/Context';
import Cos from '../Components/ui/Cos';

function CosCumparaturi() {
    const {itemsId, totalPret} = useContext(Context)
    return (
        <section>
            <h1>Cos cumparaturi</h1>
            {itemsId.length === 0 &&
                <div className='divback'>
            <h2>Nu aveti produse in cos!</h2>
                    <button className='back'><Link to='/'>Inapoi la cumparaturi</Link></button> 
                    </div>}
            <div className='produse_cos'>
                <div className='produse'>
            {itemsId.map((idp) => (
                 <Cos idp={idp}
                 key={idp}  
                 localstore={itemsId}                   
             />
            ))}
                </div>
                {itemsId.length !== 0 &&
                <div className='pret_total'>
                        <h3>Sumar comanda</h3>
                        <p>Cost produse {totalPret} Lei</p>
                        <p>Cost livrare  19.00 Lei</p>
                        <hr></hr>
                        <h3> Total: <span> {parseFloat(totalPret) + 19}</span> Lei </h3>
                        <div className='continua'>
                            <button ><Link to='/'>Continua</Link></button>
                            </div>
                    </div>
                }
             </div>
             
        </section>
    )
}

export default CosCumparaturi;