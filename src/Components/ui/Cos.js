import React, {useContext, useEffect } from "react";
import PROD_DATA from "../../Img/List";
import "./Cos.css"
import Context from "../../context/state/Context";
// import itemP from '../sesions/Details'


export default function Cos(props) {

    const { removeItem, total,  addCountProd, decrCountProd, countProd } = useContext(Context)

    let count = 1
    function countCurent(id) {
        let obcount = {}
        if (countProd.length !== 0) {
            obcount = countProd.filter(ob => Object.keys(ob) == "item" + id)
            count = obcount[0]["item" + id]
        }
        return count
    }
    countCurent(props.idp)
   
    let elemcos = PROD_DATA.filter((fil) => fil.id === props.idp)[0]
    const pretafis = (elemcos.pret - (elemcos.pret / 100 * elemcos.oferta)).toFixed(2)
    const promo = (elemcos.pret / 100 * elemcos.oferta * count).toFixed(2)
    const prettotal = pretafis * count
    const rest = elemcos.stoc - count
    
    function itemP(ky, val) {
        let countnr = new Object()
        countnr[ky] = val
        return countnr
    }

    const pretTotal = props.localstore.map((ids) => {
        let elcos = PROD_DATA.filter((fil) => fil.id === ids)[0]
        const pretaf = (elcos.pret - (elcos.pret / 100 * elcos.oferta)).toFixed(2)
        const pretotal = (pretaf * countCurent(ids))
        return pretotal
    })

    const tot = parseFloat(pretTotal.reduce((a, b) => a + b, 0)).toFixed(2)

    useEffect(() => {
        total(tot)
    },[countProd])
  
    return (
        <div className="divcos">
         <div className="produs_cos"> 
         <div>
            <img width='40px' src={elemcos.image}
                alt={elemcos.name} />
            </div>
            <div>
                <span>{elemcos.name} </span>
                </div>
                <div>
            {elemcos.description}
            </div>
            <div className="btn_count">
                    <button onClick={() => decrCountProd(itemP("item" + props.idp,1))}>-</button> {countCurent(props.idp)}
                    {rest > 0 && <button onClick={() => addCountProd(itemP("item" + props.idp,1))}>+</button>}
            </div>
            <div className="subtotal">
                <span>{(prettotal).toFixed(2)} </span> Lei     
            </div>
            <div>
                <button className="del" onClick={()=>removeItem(props.idp,itemP("item" + props.idp,1))}>X sterge</button>         
                </div>
            </div>
            <hr></hr>
            <div className="info">
            <div className="disp">
                    <p><small>Disponibilitate: {elemcos.stoc !== 0 && <span>in stoc </span>}{rest} buc</small></p>
            </div>
            <div className="eco">
            {elemcos.oferta !== 0 && <p><small>Ai economisit {promo} Lei</small></p>}
           </div>
           </div>        
        </div>
    )

}
