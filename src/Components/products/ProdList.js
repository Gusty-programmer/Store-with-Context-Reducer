import React, {useContext} from 'react';
import classes from './ProdList.module.css';
import ProdItems from './ProdItems';
import Menu from '../ui/Menu';
import Context from '../../context/state/Context';



function ProdList(props) {
    
    const {filtruMenu} = useContext(Context)
    const category = ["Toate"];
    let filtruCateg = props.products 
    let categFilter = filtruMenu
    if (categFilter === "Toate") {
        filtruCateg = props.products
    } else {
        filtruCateg = props.products.filter((fil) => fil.categ === categFilter)
    }
   
    props.products.map((cat) => {
      if (!category.includes(cat.categ)) {
            category.push(cat.categ)
        }  
        return category
    })

    return (
        <div className={classes.ul}>
            <div className={classes.divlist}>
                <ul className={classes.menulist}>
                {category.map((catg) => (
                    <Menu
                        categ={catg}
                        key={category.indexOf(catg)}  
                        produs={props.products}
                        
                    />                    
                ))}   
            </ul> 
            </div>          
            <div className={classes.cards}>
               <ul className={classes.list}>
                {filtruCateg.map((prod) => (
                <ProdItems
                    key={prod.id}
                    id={prod.id}
                    image={prod.image}
                    name={prod.name}
                    scara={prod.scara}
                    pret={prod.pret}
                    description={prod.description}
                    promo={prod.oferta}
                    stoc={prod.stoc}
                     
                />
            ))}
            </ul> 
            </div>         
          </div> 
        
           
        
    );
}

export default ProdList;