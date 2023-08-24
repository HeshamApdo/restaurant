
"use client"
import { useEffect, useState } from "react"
import { juices0 } from "@/constant"
import Link from "next/link"

export default function juices(){
    const [heart, setHeart] = useState(false)
    return(
        <div className="mt-[100px] md:mt-[150px] lg:mt-20 lg:ml-[300px] pb-10">
            <div className="flex flex-row gap-5 flex-wrap justify-center items-center">
                {juices0.map((juice) =>(
                    <div className="flex flex-row gap-2 w-[300px] sm:w-[400px] h-[300px] border border-black rounded-xl items-center bg-slate-200">
                        {juice.compo.map((el) =>(
                            <>
                            <div className="flex flex-row gap-2 w-[300px] sm:w-[400px] h-[300px] border border-black rounded-xl bg-slate-200 relative p-5">
                                <div className="w-[100px] sm:w-[150px] h-[100%] flex justify-center items-center border-r-2 border-black">
                                    <img src={el.image} className="object-contain sm:scale-75 hover:scale-100 transition-all duration-200"/>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="text-xl font-semibold border-b-4 border-yellow-500">
                                        {el.title}
                                    </div>
                                    <div className="w-fit p-2 bg-black text-yellow-400 font-semibold rounded-xl">
                                        ${el.price.toFixed(2)}
                                    </div>
                                    <div className="bg-black w-[100px] rounded-full h-[30px] flex  items-center">
                                        {el.star === 2? <img src="/star2.png" className="w-[100px]"/> : el.star === 3 ? <img src="/star3.png" className="w-[100px]"/> : el.star === 3.5 ? <img src="/star3.5.png" className="w-[100px]"/> : el.star === 4 ? <img src="/star4.png" className="w-[100px]"/> : <img src="/star5.png" className="w-[100px]"/>}
                                    </div>
                                    <Link href={`/products/juices/${juice.id}`} className="absolute bottom-10" title="more info">
                                        <img src="/information.png" />
                                    </Link>
                                    <div className="absolute bottom-2 left-4 w-fit bg-black p-1 rounded-full justify-center items-center">
                                        <img src="/add-to-cart.png"/>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-4" title="give star">
                                    <img src={el.loveStar} className={`cursor-pointer opacity-50`} onClick={(e) => e.currentTarget.style.opacity="1"} onDoubleClick={(e) => e.currentTarget.style.opacity=".5"}/>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

