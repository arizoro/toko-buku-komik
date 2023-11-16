import { Link } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context"


const Buku = ({item}) => {
    const {addCartItem, cartItem } = useContext(GlobalContext)
    
    return (
    <>
        {item.map((buku,i)=> {
            const countItem = cartItem[buku.id] 
            // if(!buku){
            //     return (
            //         <h1>not found</h1>
            //     )
            // }
            return (
                <div className="py-3 items-center text-white md:gap-8 md:mx-4 bg-neutral-800  rounded " key={i} >
                <Link to={`/book/${buku.id}`} >
                    <h3 className="md:text-xl font-bold py-2 hover:text-orange-600 transition-all" >{buku.title}</h3>
                    <img src={buku.image} alt="..."   className=" w-full object-cover md:h-64 rounded  h-24 " />
                    <p className="md:text-lg text-sm">Penulis : {buku.penulis}</p>
                    <span>Harga : Rp.{buku.harga}</span>
                </Link>
                    <div className="flex justify-end">
                        <button 
                        className=" bg-cyan-800 p-2 rounded mx-2 w-36 hover:text-orange-600 font-bold"
                        onClick={() => addCartItem(buku.id) }
                        >Add to Cart {countItem > 0 && <>({countItem})</> } </button>
                    </div>
                </div>
            )
        })}
    </>
    )
}

export default Buku