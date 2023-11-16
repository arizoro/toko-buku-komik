import { useRef } from "react"
import Items from "../components/item"
import { data } from "../data"
import { useState } from "react"

const Book = () => {
    const searchRef = useRef()
    const [search , setSearch] = useState(data)
    console.log(data)
    
    function handleSearch(e){
        const keyword = searchRef.current.value
        const item = data.filter((item)=> {
            const key = item.title.toLocaleLowerCase()
            return key.includes(keyword)
        })
        console.log(item)
        // if(keyword.trim() === '') return

        if(e.key === "Enter" || e.type === "click"){
            e.preventDefault()
            setSearch(item)
        }
    }


    return( 
        <div className=" p-8 " >
            <h1 className="text-white text-3xl md:mx-8 mb-2 ms-4 ">Buku yang tesedia ..</h1>
            <div className="md:float-right md:me-8 float-left ms-4  " >
                <input onKeyUp={handleSearch} type="text" placeholder="cari disini !!" className="rounded mx-1 w-56 p-1 " ref={searchRef} />
                <button onClick={handleSearch} className="bg-white text-black border border-black rounded p-1
                hover:text-white hover:bg-black hover:border-white " 
                >Search</button>
            </div>
            <div className="py-6 mt-8 " >
            <Items search={search} /> 
                
            </div>
        </div>
    )
}

export default Book