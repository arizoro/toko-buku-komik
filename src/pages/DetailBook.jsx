import { useParams } from "react-router-dom"
import { data } from "../data"
import { ChatCenteredDots, ThumbsUp } from "@phosphor-icons/react"
import { useState } from "react"

const DetailBuku = () => {
    const [comment, setComment] = useState(false)
    const params = useParams()
    const [like , setLike] = useState(500)
    
    const handleLike = () => {
        if(like % 2 == 0 ){
            setLike((p) => p + 1)
            
        }
        if(like % 2 == 1 ){
            setLike((p) => p - 1)
        }
    }


    const handleClick = () => {
        setComment((open) => !open)
    }

    const items = data.filter((datas) => params.id == datas.id) 
    const buku = items[0]

    return (
        <div className="w-full  h-full p-8 " >
            <div className=" md:w-6/12 flex  bg-white bg-fixed mx-auto rounded-md " >
                <div className="flex flex-col " >
                    <img src={buku.image} alt="" className="w-8/12 h-4/6 mt-10 mb-2 mx-auto rounded border-2 " />
                    <h1 className="text-3xl font-semibold mx-6 " >{buku.title}</h1>
                    <span className="mx-6 text-gray-500 pb-3" >Penulis : {buku.penulis}</span>
                    <p className="mx-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quisquam pariatur reiciendis doloribus consequatur debitis eos. Error at maxime officia perferendis doloribus, odit asperiores, quidem, saepe numquam laboriosam obcaecati reiciendis blanditiis nostrum soluta veniam mollitia necessitatibus ex earum? Magnam repellendus, veritatis eum id a corporis, nulla tenetur </p>
                    <div className=" mt-7 flex mx-6 items-center mb-2" >
                        <button className="mx-2" onClick={handleClick} >
                        <ChatCenteredDots size={32} />
                        </button>
                        <button onClick={handleLike} >
                            <div className=" flex justify-start ">
                            {like % 2 == 1 ? <ThumbsUp size={32} color="red" /> : <ThumbsUp size={32} /> } 
                            <p className=" relative mx-1 text-xs text-blue-600 font-semibold " >{like}</p>
                            </div>
                        </button>
                    </div>
                    {comment ? <InputComment/> : null}
                </div>
            </div>
        </div>
    )
}

const InputComment = () => {

    return(
        <div className="mx-8 mt-2">
            <div className="flex md:justify-start flex-wrap ">
                <textarea onChange={(e) => console.log(e.target.value)} name="comment" id="" placeholder="comment disini`" className=" md:w-96 h-8 w-44 " autoFocus ></textarea>
                <button onClick={() => alert('comment success!')} className=" bg-blue-600 w-20 border border-black rounded my-1 md:mx-2 text-white " >send</button>
            </div> 
        </div>
    )
}

export default DetailBuku