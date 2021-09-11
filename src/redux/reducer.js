import { Increment } from "./action-types";
import {Decrement} from './action-types'
import { Reset } from "./action-types";


const initialstate = {
    counter: 0
}


export const counterreducer = (state = initialstate, action) => {
    switch (action.type) {
        case Increment: return ({ ...state, counter:state.counter + 1 })
        case Decrement:return({...state, counter:state.counter-1})
        case Reset :return({...state, counter:0})
        default: return state;
    }

}


