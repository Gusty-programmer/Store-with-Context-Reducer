import { useReducer } from "react";
import { COUNT_COS, ADD_ITEMS_COS,  ADD_COUNT, REMOVE_ITEM, TOTAL_PRET} from "../Types";
import Reducer from "./Reducer";
import Context from "./Context";



const State = ({ children }) => {
    const initialState = {
        countProd:[],
        itemsId: [],
        
    }

const [state, dispatch] = useReducer(Reducer, initialState)

    const addCountProd = (item) => {    
       const newCount = state.countProd.map((ob) => {
             if(JSON.stringify(Object.keys(ob))===JSON.stringify(Object.keys(item))) { 
                 ob[Object.keys(item)] += 1        
           }    
            return ob
       })
        dispatch({ type: ADD_COUNT, payload: newCount })    
    };

    const addItemsCos = (item1, item2) => {
        if(!state.itemsId.includes(item1)){
            dispatch({ type: ADD_ITEMS_COS, payload: item1 })
        var exist = true 
        const isIn = state.countProd.map((ob) => {
             if(JSON.stringify(Object.keys(ob))==JSON.stringify(Object.keys(item2))) { 
                 exist = false
            }  
            return exist
        })
      isIn && dispatch({ type: COUNT_COS, payload: item2 })}       
    };

    const decrCountProd = (item) => {   
        const newCount = state.countProd.map((ob) => {
              if(JSON.stringify(Object.keys(ob))===JSON.stringify(Object.keys(item))) { 
                  ob[Object.keys(item)] -= 1  
                  if(ob[Object.keys(item)] <= 1 ){ob[Object.keys(item)] = 1 }
            }    
             return ob
        })
         dispatch({ type: ADD_COUNT, payload: newCount })    
     };

    const removeItem = (id,itemId) => {
        dispatch({ type: REMOVE_ITEM, payload: id });
        const newCount = state.countProd.filter((ob) => 
            JSON.stringify(Object.keys(ob)) !==JSON.stringify(Object.keys(itemId))
        )       
        dispatch({ type: ADD_COUNT, payload: newCount })      
    };

    const total = (tot) => {
        dispatch({type: TOTAL_PRET, payload: tot})
    };

    
return (
    <Context.Provider
        value={
            {
                countProd: state.countProd,
                totalPret: state.totalPret,
                itemsId: state.itemsId,
                filtruMenu: state.filtruMenu,
                addCountProd,               
                addItemsCos,
                total,
                removeItem,
                decrCountProd,
            }
        }
    >
        {children}
    </Context.Provider>
    )
}

export default State