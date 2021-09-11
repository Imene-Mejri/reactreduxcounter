


import {Increment} from './action-types';
import {Decrement}from './action-types';
import {Reset} from './action-types';


 export const incrementhandler=()=>{
     return{
         type:Increment
        }
 }

 export const decrementhandler=()=>{
     return {
     type:Decrement
    }
 }

  export const Resethandler=()=>{
      return{
          type:Reset
      }
  }