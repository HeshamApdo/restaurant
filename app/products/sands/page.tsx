
"use client"
import { useEffect, useState } from "react"
import { sands } from "@/constant"
import Link from "next/link"

export default function pizza(){
    const [heart, setHeart] = useState(false)
    return(
        <div className="mt-[100px] md:mt-[150px] lg:mt-20 lg:ml-[300px] pb-10">
            <div className="flex flex-row gap-5 flex-wrap justify-center items-center">
                {sands.map((sand) =>(
                    <div className="flex flex-col gap-2 w-[350px] h-[500px] border border-black rounded-xl items-center bg-slate-200">
                        {sand.compo.map((el) =>(
                            <>
                            <div className="flex flex-col gap-2 w-[350px] h-[500px] border border-black rounded-xl items-center bg-slate-200 relative">
                                <Link href={`/products/sands/${sand.id}`}>
                                <div className="w-[300px] h-[300px] border-b-2 border-black mb-1 flex justify-center items-center">
                                <img src={el.image} className="object-contain mt-3 hover:rotate-45 transition-all duration-200 mb-2"/>
                                </div>
                                </Link>
                            <div className="flex flex-col">
                                <div className="text-xl font-semibold text-center">
                                    {el.title}
                                </div>
                                <div className="absolute bottom-2 right-4">
                                    <img src={el.heart} className={`cursor-pointer opacity-50`} onClick={(e) => e.currentTarget.style.opacity="1"} onDoubleClick={(e) => e.currentTarget.style.opacity=".5"}/>
                                </div>
                                <div className="absolute bottom-2 left-4">
                                    {el.country === "a" ? <img src="/united-states.png" width={35}/> : el.country === "b" ? <img src="/united-kingdom.png" width={35}/> : el.country === "c" ? <img src="/turkey.png" width={35}/> : el.country === "d" ? <img src="/spain.png" width={35}/> : el.country === "e" ? <img src="/germany.png" width={35}/> : el.country === "f" ? <img src="/france.png" width={35}/> : el.country === "g" ? <img src="/china.png" width={35}/> : <img src="/canada.png" width={35}/>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 justify-center items-center">
                                    <div className="w-fit p-2 bg-black text-yellow-400 font-semibold rounded-xl">
                                        ${el.price.toFixed(2)}
                                    </div>
                                    <div>
                                        {el.star === 2? <img src="/star2.png" className="w-[100px]"/> : el.star === 3 ? <img src="/star3.png" className="w-[100px]"/> : el.star === 3.5 ? <img src="/star3.5.png" className="w-[100px]"/> : el.star === 4 ? <img src="/star4.png" className="w-[100px]"/> : <img src="/star5.png" className="w-[100px]"/>}
                                    </div>
                                </div>
                                <Link href={`/products/sands/${sand.id}`} className="-mt-3 xl:hidden">
                                        <div className="w-[fit] px-4 py-2 bg-black text-yellow-400 flex flex-row gap-1 rounded-t-xl border-x-4 border-t-4 border-yellow-400">
                                            <span className="text-semibold">
                                                Get
                                            </span>
                                            <img src="/buy.png" />
                                        </div>
                                </Link>
                            </div>
                            </>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}