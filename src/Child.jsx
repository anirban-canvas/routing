import { useContext } from "react";
import { Gchild } from "./Gchild";
import { DataContext } from "./DataContext";

export function Child(){


    const data=useContext(DataContext)
    return(<>
    from child  {data.data}
    <Gchild />
    </>)

}