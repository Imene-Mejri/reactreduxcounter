


import {increment} from './action-types';
import {decrement}from './action-types';
import {Reset} from './action-types';


 export const incrementhandler=()=>{
     return{
         type:increment
        }
 }

 export const decrementhandler=()=>{
     return {
     type:decrement
    }
 }

  export const Resethandler=()=>{
      return{
          type:Reset
      }
  }