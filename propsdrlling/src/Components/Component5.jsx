import { useContext } from "react"
import { Appcontext } from "../Context/AppContex"
import Component6 from "./Component6";

const Component5=()=>{
    const{f}=useContext(Appcontext);
    return(
        <>
            <h3>This is prop f:{f}</h3>
            <Component6/>
        </>
    )
}
export default Component5;