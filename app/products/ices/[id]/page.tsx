
"use client"
import Price from "@/components/Price"
import { ices } from "@/constant"
import { useState, useEffect } from 'react'

export default function id({params} : any){
    const [size, setSize] = useState(["Small","Medium","Large"])
    const [selected, setSelected] = useState(0)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    return(
        <div className="mx-auto lg:ml-[420px] xl:ml-[400px] mt-[100px] lg:mt-[5px] xl:mt-[90px] pb-10">
            {ices.map((ice) =>(
                <div>
                    {ice.id === params.id &&
                    <div className="flex flex-col xl:flex-row justify-center items-center">
                        {ice.compo.map((el) =>(
                            <div className="flex flex-col xl:flex-row gap-5 xl:gap-[40px] justify-center items-center">
                                <div className="flex justify-center items-center w-[300px] sm:w-[300px] xl:w-[300px]">
                                    <img src={el.image} className="object-contain p-10"/>
                                </div>
                                <div className="flex flex-col gap-3 justify-center items-center">
                                    <div className="text-3xl sm:text-6xl xl:text-5xl font-semibold border-b-4 border-yellow-400">
                                        <div className="flex flex-row gap-2">
                                        {el.title}
                                        </div>
                                    </div>
                                    <div className="w-[400px] p-3 xl:p-0 text-center xl:text-start sm:w-[600px] xl:w-[500px] opacity-90 selection:bg-black selection:text-yellow-400 text-xl">
                                        {el.des}
                                    </div>
                                    <div className="w-fit p-1 mt-2 bg-black rounded-full flex justify-center items-center cursor-pointer" onClick={() => window.history.back()}>
                                        <img src="/back.png"/>
                                    </div>
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
