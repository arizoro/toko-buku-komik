import { useContext } from "react"
import { GlobalContext } from "../../context"


const CartItem = ({buku}) => {
    const { cartItem,addCartItem,removeCartItem,updateCartItem,} = useContext(GlobalContext)

    return(
        <div className=" m-auto w-10/12 bg-white sm:w-8/12 lg:w-5/12 md:w-6/12 h-36 mt-4 rounded flex " >
            <div  >
                <img src={buku.image} alt="" className=" h-36 w-36 object-scale-down mx-2 p-2 shadow rounded-xl" />
            </div>
            <div className=" mt-2 mx-4 mb-3" >
                <h1 className="md:text-3xl sm:text-2xl text-xl font-bold underline " >{buku.title}</h1>
                <div className="mt-4 rounded " >
                    <button onClick={() => addCartItem(buku.id)} className="text-white font-bold bg-black rounded w-8 " > + </button>
                    <input type="text" className="w-10 text-center border " value={cartItem[buku.id]} onChange={(e) => updateCartItem(e.target.value,buku.id)} />
                    <button onClick={() => removeCartItem(buku.id)} className="text-white font-bold bg-black rounded w-8 " > - </button>
                </div>
                <p className="mt-1" >Harga : Rp.{buku.harga}</p>
            </div>
        </div>
    )
}
export default CartItem
