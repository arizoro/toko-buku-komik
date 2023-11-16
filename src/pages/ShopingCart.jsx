import { useContext } from "react"
import { data } from "../data"
import { GlobalContext } from "../context"
import CartItem from "../components/CartItem"
import { useNavigate } from "react-router-dom"

const ShoppingCart = () => {
    const {cartItem, getTotalAmount, checkOut } = useContext(GlobalContext)
    const navigate = useNavigate()

    const subTotalAmount = getTotalAmount()
    return(
        <>
        <div className=" w-full h-full mt-8 mb-6" >
            { data.map((buku, i) => {
                    if(cartItem[buku.id] !== 0 ){
                        return (
                            <CartItem buku={buku} />
                        )
                    }
                })
            }           
        </div>
        <div className=" relative w-full bottom-4   ">
                {subTotalAmount > 0 ? 
                    (
                    <div className=" flex flex-col justify-center items-center" >
                        <p className=" md:w-5/12  w-10/12 text-white text-xl font-bold p-2 rounded" >Subtotal : Rp. {subTotalAmount},-</p>
                        <div className="mt-3 md:w-5/12  w-10/12 flex md:justify-between gap-4" >
                        <button onClick={()=>navigate("/")} className=" bg-white p-2 rounded " >Continue Shoping</button>
                        <button onClick={() => checkOut()} className=" bg-white p-2 rounded " >CheckOut</button>
                        </div>
                    </div>
                    )
                :(
                    <div>
                        <h1 className="text-white text-center text-2xl" >Your Cart is Empty</h1>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default ShoppingCart