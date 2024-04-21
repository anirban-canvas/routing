import { useContext } from "react"
import { DataContext } from "./DataContext"

export function Gchild(){


    const data=useContext(DataContext)

    return(<>
    from grand Child : {data.data}
    </>)

}