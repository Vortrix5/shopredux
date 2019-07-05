import item1 from "./item1.png"
import item2 from "./item2.png"
import item3 from "./item3.png"
import item4 from "./item4.png"
import item5 from "./item5.png"
import item6 from "./item6.png"



const initState = {
    items: [
        { id: 1, title: 'Nike', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", quantity: 0, price: 110, src: item1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", quantity: 0, price: 80, src: item2 },
        { id: 3, title: 'Balenciaga', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", quantity: 0, price: 120, src: item3 },
        { id: 4, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", quantity: 0, price: 260, src: item4 },
        { id: 5, title: 'Converse', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", quantity: 0, price: 160, src: item5 },
        { id: 6, title: 'Pull&Bear', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", quantity: 0, price: 90, src: item6 }
    ],
    addedItems: [],
    total: 0,
    totalQuantity: 0,
    tit: "ReduxShop"
}
export default function Items(state = initState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            {
                if (state.addedItems.find((el) => el.id === action.payload.id)) {
                    return { ...state, quantity: action.payload.quantity += 1, total: state.total + action.payload.price }
                } else {
                    return { ...state, addedItems: state.addedItems.concat(action.payload),quantity: action.payload.quantity = 1, totalQuantity: state.totalQuantity+1, total: state.total + action.payload.price * action.payload.quantity }
                }
            }
        case "REMOVE_FROM_CART":
            {
                
                return {...state, addedItems: state.addedItems.filter(w=>w.id!==action.payload.id), total: state.total - action.payload.price * action.payload.quantity}
            }
        case "ITEM_PLUS":
            {
                    return { ...state, quantity: action.payload.quantity += 1,total: state.total + action.payload.price  }
            }
        case "ITEM_SUB":
            {
                    return { ...state, quantity: action.payload.quantity -= 1, total: state.total - action.payload.price }

            }
        default: return state
    }


}
