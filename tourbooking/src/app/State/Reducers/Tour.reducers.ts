import { createReducer, on } from "@ngrx/store";
import { Tour } from "../../models";
import { TourActions } from "../Action/Tour.actions";


export interface TourInterface{
    Id:string    
    userId:string
    tours:Tour[]
    toursError:string
    tourLoading:boolean
    addTourSuccessMessage:string
    addTourErrorMessage:string
    addTourLoading:boolean

}
const initialstate:TourInterface={
    addTourErrorMessage:'',
    addTourLoading:false,
    addTourSuccessMessage:'',
    tours:[],
    tourLoading:false,
    toursError:'',
    Id:'',
    userId:''
}

export const tourReducer= createReducer(
    initialstate,
    on(TourActions.add, (state)=>{
        return {
            ...state,
            addTourLoading:true,
            addTourErrorMessage:'',
            addTourSuccessMessage:''
        }
    }),
    on(TourActions.addSuccess, (state, {response})=>{
        return {
            ...state,
            addTourLoading:false,
            addTourErrorMessage:'',
            addTourSuccessMessage:response.message
        }
    }),
    on(TourActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addTourLoading:false,
            addTourErrorMessage:message,
            addTourSuccessMessage:''
        }
    }),

    on(TourActions.get, (state,)=>{
        return {
            ...state,
           tours:[],
           tourLoading:true,
           toursError:''
        }
    }),

    on(TourActions.getSuccess, (state,{tours})=>{
        return {
            ...state,
           tours:tours,
           tourLoading:false,
           tourssError:''
        }
    }),
    on(TourActions.getFailure, (state,{message})=>{
        return {
            ...state,
           tours:[],
           tourLoading:false,
           toursError:message
        }
    }),

    on(TourActions.getTourById, (state,{id})=>{
        return {
            ...state,
           Id:id
        }
    }),

    on(TourActions.getUserTour, (state,{userId})=>{
        return {
            ...state,
           userId
        }
    }),
)