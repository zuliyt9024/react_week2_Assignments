import { useContext } from "react"

const Component6=()=>{
    const {e}=useContext(AppContext);
    return(
        <>
            <h3>This is prop e:{e}</h3>
            <Component6/>
        </>
    )

}