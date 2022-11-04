import { type } from "@testing-library/user-event/dist/type"
import { bindActionCreators } from "redux";

const initialstate ={
    count : 100,
    name : "mitz"
}
const reducer = (state = initialstate,action) =>{
    if(action.type === "incr"){
        return{
            ...state,
            count:state.count + 1,
            name:state.name="Gohil"
        }
    }
    if(action.type === "decr"){
        return{
            ...state,
            count:state.count - 1,
            name:state.name="Rajput"
        }
    }
    return state;
}
export default reducer