
"use client"
import Price from "@/components/Price"
import { tacos } from "@/constant"
import { useState, useEffect } from 'react'

export default function id({params} : any){
    const [size, setSize] = useState(["Small","Medium","Large"])
    const [selected, setSelected] = useState(0)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    return(
        <div className="mx-auto lg:ml-[420px] xl:ml-[400px] mt-[100px] md:mt-[120px] xl:mt-[90px] pb-10">
            {tacos.map((taco) =>(
                <div>
                    {taco.id === params.id &&
                    <div className="flex flex-col xl:flex-row justify-center items-center">
                        {taco.compo.map((el) =>(
                            <div className="flex flex-col xl:flex-row gap-5 xl:gap-[60px]">
                                <div className="flex justify-center items-center xl:justify-normal xl:items-baseline">
                                    <img src={el.image} className="w-[300px] sm:w-[500px] xl:w-[400px]"/>
                                </div>
                                <div className="flex flex-col gap-3 justify-center items-center xl:justify-normal xl:items-start">
                                    <div className="text-3xl sm:text-6xl xl:text-5xl font-semibold border-b-4 border-yellow-400">
                                        <div className="flex flex-row gap-2">
                                        {el.title}
                                        {el.country === "a" ? <img src="/united-states.png" width={50}/> : el.country === "b" ? <img src="/united-kingdom.png" width={50}/> : el.country === "c" ? <img src="/turkey.png" width={50}/> : el.country === "d" ? <img src="/spain.png" width={50}/> : el.country === "e" ? <img src="/germany.png" width={50}/> : el.country === "f" ? <img src="/france.png" width={50}/> : el.country === "g" ? <img src="/china.png" width={50}/> : <img src="/canada.png" width={50}/>}
                                        </div>
                                    </div>
                                    <div className="w-[400px] p-3 xl:p-0 text-center xl:text-start sm:w-[600px] xl:w-[500px] opacity-70 selection:bg-black selection:text-yellow-400">
                                        {el.des}
                                    </div>
                                    <Price price={el.price} id={el.id}/>
                                    <div className="flex flex-row w-[300px] h-[50px] mt-2 justify-center items-center">
                                        {!show && <div className="w-[130px] h-[50px] border border-black text-center flex justify-center items-center text-lg font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300 cursor-pointer rounded-l-lg" onClick={() => setShow(true)}>
                                            Add To Cart
                                        </div>}
                                        {show &&<button type="button" className="w-[130px] h-[50px] border border-black text-center flex justify-center items-center text-lg font-semibold bg-black text-yellow-400 transition-all duration-300  rounded-l-lg cursor-not-allowed" onLoad={() =>setTimeout(() =>{
                                            // alert("done!")
                                            // window.location.reload();
                                            setShow2(true)
                                            setShow(false)
                                        },4000)}>
                                        <img className=" animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24" src="/loading.png"/>
                                        Add...
                                        </button>}
                                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-black" onClick={() => setShow(true)}>
                                            <img src="/add-to-cart.png" />
                                        </div>
                                    </div>
                                    {show2 && <div className="mt-0 ml-0 xl:ml-[100px] px-3 py-2 w-[fit] bg-black text-yellow-400 flex flex-row gap-1 rounded-full">
                                            <span>done!</span>
                                            <img src="/done.png" />
                                        </div>}
                                </div>
                            </div>
                        ))}
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}
