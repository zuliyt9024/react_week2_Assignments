

import { useContext } from "react";
import Component5 from "Component5";
import { Appcontext } from "../Context/AppContex";


const Compopnent4=()=>{
    const {c,d}=useContext(Appcontext);
    return(
        <>
            <h3>This is prop c:{c}</h3>
            <h3>This is prop c:{c}</h3>
            <Component5/>
        </>
    );
};
export default Compopnent4;
