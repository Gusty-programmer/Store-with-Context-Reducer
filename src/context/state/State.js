import { useReducer } from "react";
import { COUNT_COS, ADD_ITEMS_COS,  ADD_COUNT} from "../Types";
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
            }
        }
    >
        {children}
    </Context.Provider>
    )
}

export default State