import imageBanner from '../../assets/book.png'

const Banner = () => {
    return (
        <div className="grid md:grid-rows-2 md:grid-flow-col gap-4 p-8 bg-cover  bg-slate-200 m-10 items-center md:flex-wrap lg:flex-no-wrap" >
            <div className="md:col-span-4 md:row-span-2 md:mx-4 md:p-8 ">
                <div className='flex flex-col md:text-center md:p-8 p-1' >
                <h3 className='font-bold md:text-5xl my-6 text-3xl'>Buku adalah jendela Dunia</h3>
                <h1 className=' font-serif md:text-6xl text-4xl' >Jangan Malas Membaca Buku</h1>
                </div>
            </div>
            <div className="flex md:col-span-2  flex-col col-span-1 md:mx-3 row-span-2 items-center">
                <img src={imageBanner} alt="" className=" shadow-transparent shadow md:w-64 sm:w-48 w-36  " />
            </div>
        </div>
    )
}

export default Banner