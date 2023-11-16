import { data } from "../../data"
import Buku from "./Buku"

const Items = ({search}) => {

const item = data
console.log(search)

    return (
        <div className="grid md:grid-cols-3 gap-3 px-4 grid-cols-2  ">
                { search ? <Buku item={search} /> :
                <Buku item={item} /> 
                }
        </div>
    )
}

export default Items