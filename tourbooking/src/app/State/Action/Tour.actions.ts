import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { addTour, Tour, addResponse } from "../../models";

export const TourActions = createActionGroup({
    source:'Tour API',
    events:{
    'add' :props< {newTour: addTour} >(),
    'add success':props <{response:addResponse }>(),
    'add failure':props <{message:string}>(),

    'get':emptyProps(),
    'get success':props<{tours:Tour[]}>(),
    'get failure':props<{message:string}>(),
    
    'getTourById':props<{id:string}>(),
    'get User Tour':props<{userId:string}>(),

    }


})