import { increment } from "./action-types";
import { decrement } from "./action-types";
import { Reset } from "./action-types";


const initialstate = {
    counter: 0
}


export const counterreducer = (state = initialstate, action) => {
    switch (action.type) {
        case increment: return ({ ...state, counter:state.counter + 1 })
        case decrement:return({...state, counter:state.counter-1})
        case Reset :return({...state, counter:0})
        default: return state;
    }

}


