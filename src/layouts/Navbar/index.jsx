import { NavLink,Link,Outlet } from "react-router-dom"
import {CodesandboxLogo, ShoppingCart} from "@phosphor-icons/react"
import { useContext } from "react"
import { GlobalContext } from "../../context"



const Navbar = () => {
    const {cartItem} = useContext(GlobalContext)

    const total = () => {
        let totalJumlah = 0
        for(const item in cartItem){
            if(cartItem[item] > 0) {
                totalJumlah += cartItem[item] 
            }
        }
        return totalJumlah
    }

    const sum = total()


    return (
        <>
        <div className="w-full flex md:flex-row border-b-2 border-slate-500 bg-transparent  gap-2  p-4 md:items-center  " >
            <div className="max-h-full flex items-center " >
            <Link to="/">
            <h1  className="md:text-2xl text-xl font-bold md:mx-3 text-center  text-slate-100" >
                ArieShop
            </h1>
            </Link>
            <ul className="flex md:justify-center  md:items-center  mx-3  text-slate-100 items-center  ">
                <li className="md:text-xl  text-md font-semibold">
                <NavLink to="/book" >Buku</NavLink>
                </li>
            </ul>
            </div>
            <NavLink to="/cart" className="w-full flex justify-end" >
                <div className="flex justify-center text-white mx-8">
                <ShoppingCart size={30} className="text-center" />
                { sum != 0 ?
                <span className=" relative right-3 bottom-2 rounded-xl w-5 h-5 flex justify-center items-center bg-red-600 ring-1 " >{sum} </span>
                : null
                }
                </div>
                </NavLink>
        </div>
        <p/>
        <Outlet/>
        </>
    )

}

export default Navbar