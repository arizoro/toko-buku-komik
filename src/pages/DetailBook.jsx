import { useParams } from "react-router-dom"
import { data } from "../data"
import { ChatCenteredDots, ThumbsUp } from "@phosphor-icons/react"
import { useState } from "react"

const DetailBuku = () => {
    const [comment, setComment] = useState()
    const params = useParams()

    const handleClick = () => {

        return (
            <div>
                <textarea name="comment" id="" cols="85" rows="4" autoFocus ></textarea>
            </div>
        )
    }

    const items = data.filter((datas) => params.id == datas.id) 
    const buku = items[0]
    console.log(buku)

    return (
        <div className="w-full  h-full p-8 " >
            <div className=" md:w-6/12 flex  bg-white bg-fixed mx-auto rounded-md " >
                <div className="flex flex-col " >
                    <img src={buku.image} alt="" className="w-8/12 h-4/6 mt-10 mb-2 mx-auto rounded border-2 " />
                    <h1 className="text-3xl font-semibold mx-6 " >{buku.title}</h1>
                    <span className="mx-6 text-gray-500 pb-3" >Penulis : {buku.penulis}</span>
                    <p className="mx-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quisquam pariatur reiciendis doloribus consequatur debitis eos. Error at maxime officia perferendis doloribus, odit asperiores, quidem, saepe numquam laboriosam obcaecati reiciendis blanditiis nostrum soluta veniam mollitia necessitatibus ex earum? Magnam repellendus, veritatis eum id a corporis, nulla tenetur </p>
                    <div className=" mt-7 flex mx-6 items-center" >
                        <button className="mx-2" onClick={()=>setComment(handleClick)} >
                        <ChatCenteredDots size={32} />
                        </button>
                        <button>
                        <ThumbsUp size={32} />
                        </button>
                    </div>
                    <div className="mx-8 mt-2">
                        {comment}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBuku