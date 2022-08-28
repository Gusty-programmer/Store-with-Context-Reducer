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
        case REMOVE_ITEM: {
            return {
              ...state,
              itemsId: state.itemsId.filter(
                (item) => item !== action.payload
              ),
            };
        }
        case COUNT_COS: {
            return {
                ...state,
                countProd: [...state.countProd,action.payload]
            }
        }
        case TOTAL_PRET: {
            return {
                ...state,
                totalPret: action.payload
            }
        }
        case MENU: {
            return {
                ...state,
                filtruMenu: action.payload
            }
            }
          default:
            return state;
    }
}


export default Reducer