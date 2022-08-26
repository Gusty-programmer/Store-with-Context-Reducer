import { COUNT_COS, ADD_ITEMS_COS, TOTAL_PRET, REMOVE_ITEM, ADD_COUNT, MENU } from "../Types";

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEMS_COS: {
            return {
                ...state,
                itemsId: [...state.itemsId, action.payload]             
            };   
        }
        case COUNT_COS: {
            return {
                ...state,
                countProd: [...state.countProd,action.payload]
            }
        }
        case ADD_COUNT: {
            return {
                ...state,
                countProd: action.payload
            }
            }     
          default:
            return state;
    }
}


export default Reducer