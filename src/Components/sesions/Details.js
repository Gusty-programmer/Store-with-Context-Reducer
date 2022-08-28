import React from "react";
import { useParams } from "react-router-dom";
import PROD_DATA from "../../Img/List";
import './Details.css';
import { useContext } from "react";
import Context from "../../context/state/Context";



export default function Details() {
    const {addCountProd, countProd, addItemsCos, decrCountProd,itemsId} = useContext(Context)
    const search = useParams();
    let produs = PROD_DATA.filter((fil) => fil.id === search.ID)
    let count = 1
    let obcount = {}
    if (countProd.length != 0 && itemsId.includes(produs[0].id)) {
        obcount = countProd.filter(ob => Object.keys(ob) == "item" + produs[0].id)
        count = obcount[0]["item" + produs[0].id]
  }
    
    const pretpromo = (produs[0].pret - (produs[0].pret / 100 * produs[0].oferta)).toFixed(2)
      
    function itemP(ky, val) {
        let countnr = new Object()
        countnr[ky] = val
        return countnr
    }
    
    const ramas = produs[0].stoc - count

    return (
        <section>
            <h1>Detalii produs</h1>
            <div className="detail">                
                <div className="divimg">
                    <img src={produs[0].image} alt={produs[0].name}  />
                </div>
                <div className="text_details">
                    <h3>{produs[0].name}</h3>
                    <p><span>categoria:</span> {produs[0].categ}</p>
                    <p><span>scara</span> {produs[0].scara}</p>
                    <p><span>stoc: </span> {ramas <= 0 ? 0 : ramas}</p>
                    <div className="divcount">
                        <button onClick={() => decrCountProd(itemP("item" + produs[0].id, count))}>-</button>
                        {count}
                        {ramas > 0 && <button onClick={() => addCountProd(itemP("item" + produs[0].id, count))}>+</button>}
                    </div>
                </div>
                <div className="pret">
                    <p><span>Pret cu TVA</span></p>
                    {produs[0].oferta === 0 ?
                 <p>{(produs[0].pret * count).toFixed(2)} Lei</p> :  
                 <p>{(pretpromo * count).toFixed(2)} Lei</p>
                    }
                    <div className="divbtn">
                        {produs[0].stoc !== 0 ?<button onClick={() => addItemsCos(produs[0].id,itemP("item" + produs[0].id, count))}>Adauga in cos</button> : <p>Out of stoc</p>}
                    </div>             
                </div>     
           </div>      
        </section>
    );
}